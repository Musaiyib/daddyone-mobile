import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import AntDesign from "react-native-vector-icons/AntDesign";
import { buyAirtime, getAirtimePlan } from "../api/subscription";
import { getStoredData } from "../helpers/dataStorage";

export default function AirtimeScreen() {
  const navigation = useNavigation();
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState(null);
  const [plan, setPlan] = useState({});
  const [trxPIN, setTrxPIN] = useState();
  const [user, setUser] = useState();

  const [subscription, setSubscription] = useState();
  useEffect(() => {
    getStoredData()
      .then((res) => setUser(JSON.parse(res)))
      .catch((error) => console.error(error));
  }, []);
  const filterNetwork = (val) => {
    getAirtimePlan().then((res) => {
      setSubscription(res.airtimePlan.filter((plan) => plan.network === val));
    });
  };
  useEffect(() => {
    filterNetwork(network);
  }, [network]);
  const handleBuyAirtime = () => {
    if (!user) return;
    const { _id } = user;
    buyAirtime({
      network,
      user: _id,
      phone,
      amount: plan.amount,
    }).then((res) => {
      if (!res.code || res.code !== 200) {
        alert("🔐 Error 🔐 \n" + res);
        return;
      } else {
        alert(res.message);
        navigation.navigate("Dashboard");
      }
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
        }}
      >
        <View style={styles.wrapper}>
          <RNPickerSelect
            onValueChange={(value) => setNetwork(value)}
            style={styles.pickerSelectStyles}
            Icon={() => (
              <AntDesign
                name="caretdown"
                size={15}
                color={"black"}
                style={{ position: "absolute", top: 15, right: 15 }}
              />
            )}
            items={[
              { label: "MTN", value: "mtn" },
              { label: "AIRTEL", value: "airtel" },
              { label: "9MOBILE", value: "9mobile" },
              { label: "GLO", value: "glo" },
            ]}
          />
          {network && (
            <View>
              <View style={styles.tableHead}>
                <Text style={styles.headPlan}>Network</Text>
                <Text style={styles.headAmount}>Amount(₦)</Text>
              </View>
              {subscription.length !== 0 ? (
                <FlatList
                  ItemSeparatorComponent={() => (
                    <View style={styles.separator} />
                  )}
                  data={subscription}
                  renderItem={({ item, index, separators }) => (
                    <TouchableOpacity
                      key={item.key}
                      style={item._id === plan._id ? styles.selected : null}
                      onPress={() => {
                        setPlan(item);
                      }}
                    >
                      <View style={styles.item}>
                        <Text style={styles.bodyPlan}>{item.network}</Text>
                        <Text style={styles.bodyAmount}>₦ {item.amount}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <View style={{ alignItems: "center" }}>
                  <Text style={{}}>No plan to display</Text>
                </View>
              )}
            </View>
          )}
          <View>
            <TextInput
              style={styles.buyDataInput}
              onChangeText={(val) => setPhone(val)}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.buyDataInput}
              onChangeText={(val) => setTrxPIN(val)}
              value={trxPIN}
              placeholder="Transaction PIN"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={handleBuyAirtime}
          >
            <Text style={styles.btnText}>Buy Airtime</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  // tableRows:{

  // },
  pickerSelectStyles: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      color: "tomato",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: "gray",
      borderRadius: 8,
      color: "tomato",
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  },
  tableHead: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#ff9999",
    fontFamily: "OpenSans_400Regular",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    marginVertical: 10,
  },
  headPlan: {
    flex: 2,
  },
  headAmount: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    height: 25,
    fontFamily: "OpenSans_400Regular",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  TouchableItem: {
    // backgroundColor: "blue",
  },
  bodyPlan: {
    flex: 6,
  },
  bodyAmount: {
    flex: 2.5,
  },
  separator: {
    width: "100%",
    height: 10,
  },
  selected: {
    backgroundColor: "lightgray",
    height: 30,
    justifyContent: "center",
    borderRadius: 10,
  },
  smartCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  buyDataInput: {
    marginVertical: 10,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "tomato",
    paddingRight: 30,
    flexGrow: 1,
  },
  smartCardBtn: {},
  btnText: { fontSize: 16, color: "tomato" },
  customBtnBG: {
    alignSelf: "center",
  },
});
