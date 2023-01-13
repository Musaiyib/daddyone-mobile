import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import DataScreen from "./DataScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
  const handleNavigation = (page) => {
    navigation.navigate(page);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <Text style={styles.greetText}>Good Morning</Text>
      <View style={styles.walletContainer}>
        <View>
          <View style={styles.walletInfo}>
            <Text style={styles.text}>412.85</Text>
            <View style={styles.refreshView}>
              <TouchableOpacity activeOpacity={0.3}>
                <Icon name="refresh" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subtext}>Wallet Balance</Text>
            <View style={styles.fundWalletView}>
              <Button
                title="+Fund Wallet"
                style={styles.fundBTN}
                color="tomato"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.subscriptions}>
        <TouchableOpacity onPress={() => handleNavigation("Balance")}>
          <View style={styles.item}>
            <MaterialIcon
              name="dialpad"
              size={20}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Balance Codes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Data")}>
          <View style={styles.item}>
            <MaterialIcon
              name="swap-vertical"
              size={25}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Data Purchase</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Airtime")}>
          <View style={styles.item}>
            <FeatherIcon
              name="phone"
              size={20}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Airtime Recharge</Text>
          </View>
        </TouchableOpacity>
        <Pressable onPress={() => handleNavigation("Cable TV")}>
          {/* <TouchableOpacity onPress={() => handleNavigation("Cabletv")}> */}
          <View style={styles.item}>
            <FeatherIcon
              name="tv"
              size={20}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Cable TV</Text>
          </View>
          {/* </TouchableOpacity> */}
        </Pressable>
        <TouchableOpacity onPress={() => handleNavigation("Electricity")}>
          <View style={styles.item}>
            <MaterialIcon
              name="power-plug-outline"
              size={25}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Electricity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation("Coming Soon")}>
          <View style={styles.item}>
            <IonIcon
              name="gift-outline"
              size={20}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Promo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Coming Soon")}>
          <View style={styles.item}>
            <MaterialIcon
              name="hand-heart-outline"
              size={20}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Suprise Someone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Contact")}>
          <View style={styles.item}>
            <MaterialIcon
              name="face-agent"
              size={25}
              style={styles.subsIcon}
              color={"black"}
            />
            <Text style={styles.subTitle}>Contact Us</Text>
          </View>
        </TouchableOpacity>
        {/* <Text>code: {customerID}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // STARTING OF WALLET STYLE
  walletContainer: {
    height: 250,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  greetText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "OpenSans_400Regular_Italic",
  },
  walletInfo: {
    alignItems: "center",
    marginTop: -50,
    width: "100%",
  },
  refreshView: {
    position: "absolute",
    right: -24,
    top: 10,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "OpenSans_700Bold",
  },
  subtext: {
    color: "#fff",
    fontFamily: "OpenSans_400Regular_Italic",
    fontSize: Platform.OS === "android" ? 12 : 14,
  },
  fundWalletView: {
    position: "absolute",
    bottom: -60,
  },
  fundBTN: {
    fontFamily: "OpenSans_400Regular_Italic",
    color: "tomato",
  },
  // ENDING OF WALLET STYLE

  // STARTING OF SUBSCRIPTION STYLE
  subscriptions: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  item: {
    padding: 2,
    height: Platform.OS === "android" ? 70 : 85,
    width: Platform.OS === "android" ? 70 : 85,
    backgroundColor: "#fff",
    marginBottom: 15,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderRadius: 10,
  },
  subTitle: {
    fontFamily: "OpenSans_300Light",
    fontSize: Platform.OS === "android" ? 8 : 10,
    textAlign: "center",
    marginTop: 5,
    // position: "absolute",
    // bottom: 5,
  },
  //   subsIcon: {
  //     position: "absolute",
  //     top: 15,
  //   },
  // ENDING OF SUBSCRIPTION STYLE
});
