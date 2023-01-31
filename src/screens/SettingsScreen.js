import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import { getStoredData, removeData } from "../helpers/dataStorage";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [network, setNetwork] = useState("");
  const [phoneNum, setPhoneNum] = useState(null);
  const [chosenPlan, setChosenPLan] = useState({});
  const [trxPIN, setTrxPIN] = useState();

  const handleChangePassword = () => {
    console.log("Password");
  };
  const handleLogout = () => {
    removeData().then(() => {
      navigation.navigate("LoginScreen");
    });
  };
  const handleChangePIN = () => {
    console.log("PIN");
  };
  const closeKeyboard = () => {
    console.log("PIN");
  };
  useEffect(() => {
    getStoredData().then((res) => setUser(JSON.parse(res)));
  }, []);
  const { name, email, mobile, role } = user;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View
          style={{
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}
        >
          <View style={styles.wrapper} onPress={closeKeyboard}>
            <Text style={styles.heading}>Profile</Text>
            <View style={styles.profile}>
              <Text style={styles.role}>{role}</Text>
              <Text style={styles.userInfoLabel}>
                Name:
                <Text style={styles.userInfoValue}> {name}</Text>
              </Text>
              <Text style={styles.userInfoLabel}>
                Email:
                <Text
                  style={[styles.userInfoValue, { textTransform: "lowercase" }]}
                >
                  {" "}
                  {email}
                </Text>
              </Text>
              <Text style={styles.userInfoLabel}>
                Phone:
                <Text style={styles.userInfoValue}> {mobile}</Text>
              </Text>
            </View>
            <Text style={[styles.heading, { marginTop: 25 }]}>Settings</Text>
            <View>
              <Text style={styles.subHeading}>Change Login Password</Text>
              <TextInput
                style={styles.buyDataInput}
                onChangeText={(val) => setPhoneNum(val)}
                placeholder="Old password"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.buyDataInput}
                onChangeText={(val) => setPhoneNum(val)}
                placeholder="New password"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.buyDataInput}
                onChangeText={(val) => setTrxPIN(val)}
                value={trxPIN}
                placeholder="Confirm new password"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={styles.customBtnBG}
                onPress={handleChangePassword}
              >
                <Text style={styles.btnText}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subHeading}>Change Transaction PIN</Text>
              <TextInput
                style={styles.buyDataInput}
                onChangeText={(val) => setPhoneNum(val)}
                placeholder="Old PIN"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.buyDataInput}
                onChangeText={(val) => setTrxPIN(val)}
                value={trxPIN}
                placeholder="New PIN"
                keyboardType="numeric"
              />
              <TouchableOpacity
                style={[styles.customBtnBG, styles.extraVMargin]}
                onPress={handleChangePIN}
              >
                <Text style={styles.btnText}>Change PIN</Text>
              </TouchableOpacity>
              <Button
                style={[styles.logOut, { marginVertical: 30 }]}
                mode="contained"
                onPress={handleLogout}
              >
                Log Out
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
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
  profile: {
    borderWidth: 1,
    padding: 10,
    paddingTop: 0,
    marginTop: 10,
  },
  userInfoLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 3,
  },
  userInfoValue: {
    fontSize: 16,
    fontWeight: "light",
    textTransform: "capitalize",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 5,
  },
  subHeading: {
    fontWeight: "bold",
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "tomato",
    width: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 6,
    height: 20,
    textTransform: "capitalize",
  },
  btnText: { fontSize: 16, color: "tomato" },
  customBtnBG: {
    alignSelf: "center",
  },
  extraVMargin: {
    marginBottom: 10,
  },
});
