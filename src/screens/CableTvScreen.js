import React, { useEffect, useState } from "react";
import {
  Text,
  Picker,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableHighlight,
  Keyboard,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import AntDesign from "react-native-vector-icons/AntDesign";

const CableTvScreen = ({ color }) => {
  const [cableTv, setCableTv] = useState("");
  const [smartCardNum, setSmartCardNum] = useState(null);
  const [chosenPlan, setChosenPLan] = useState({});
  useEffect(() => {
    return console.log(chosenPlan);
  }, [chosenPlan]);

  const [subscriptions, setSubscriptions] = useState([
    { plan: "Nova Plan", amount: 1800, id: uuid.v4() },
    { plan: "Kids Plan", amount: 2800, id: uuid.v4() },
    { plan: "Test Plan", amount: 3800, id: uuid.v4() },
    { plan: "Starter Plan", amount: 4800, id: uuid.v4() },
    { plan: "Joy Plan", amount: 5800, id: uuid.v4() },
    { plan: "Smarter Plan", amount: 6800, id: uuid.v4() },
  ]);

  const handleSmartCard = () => {
    smartCardNum ? console.log(cableTv) : null;
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
            onValueChange={(value) => setCableTv(value)}
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
              { label: "DSTV", value: "dstv" },
              { label: "StarTimes", value: "startimes" },
              { label: "Strong", value: "strong" },
            ]}
          />
          <View>
            <View style={styles.tableHead}>
              <Text style={styles.headPlan}>Plan</Text>
              <Text style={styles.headAmount}>Amount(₦)</Text>
            </View>
            <FlatList
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              data={subscriptions}
              renderItem={({ item, index, separators }) => (
                <TouchableOpacity
                  key={item.key}
                  style={item.id === chosenPlan.id ? styles.selected : null}
                  onPress={() => {
                    setChosenPLan(item);
                  }}
                >
                  <View style={styles.item}>
                    <Text style={styles.bodyPlan}>{item.plan}</Text>
                    <Text style={styles.bodyAmount}>₦ {item.amount}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.smartCard}>
            <TextInput
              style={styles.smartCardInput}
              onChangeText={(val) => setSmartCardNum(val)}
              placeholder="Smart card number"
              keyboardType="numeric"
            />
            <Button
              title="Verify"
              color="tomato"
              onPress={handleSmartCard}
              style={styles.smartCardBtn}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
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
  smartCardInput: {
    marginVertical: 10,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "tomato",
    paddingRight: 30,
    flexGrow: 1,
  },
  smartCardBtn: {},
});

export default CableTvScreen;
