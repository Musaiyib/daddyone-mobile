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
import AntDesign from "react-native-vector-icons/AntDesign";
import { fundAccount } from "../api/user_api";
import { getStoredData } from "../helpers/dataStorage";

export default function FundAccount() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState({});
  const [user, setUser] = useState();
  useEffect(() => {
    getStoredData()
      .then((res) => setUser(JSON.parse(res)))
      .catch((error) => console.error(error));
  }, []);
  const handleFundAccount = () => {
    if (!user) return;
    const { _id } = user;
    fundAccount({
      id: _id,
      amount: amount,
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
        <Text>Fund Account</Text>
        <View>
          <TextInput
            style={styles.buyDataInput}
            onChangeText={(val) => setAmount(val)}
            placeholder="Amount"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={handleFundAccount}
        >
          <Text style={styles.btnText}>Fund Account</Text>
        </TouchableOpacity>
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
