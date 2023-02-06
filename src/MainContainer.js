import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { StyleSheet } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AirtimeScreen from "./screens/AirtimeScreen";
import DataScreen from "./screens/DataScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BalanceScreen from "./screens/BalanceScreen";
import CableTvScreen from "./screens/CableTvScreen";
import FundAccount from "./screens/FundAccount";

import { Platform, Text } from "react-native";
import ElectricityScreen from "./screens/ElectricityScreen";
import ComingsoonScreen from "./screens/ComingsoonScreen";
import ContactScreen from "./screens/ContactScreen";
import { getStoredData } from "./helpers/dataStorage";

//Screen names
const homeName = "Home";
const airtimeName = "Airtime";
const dataName = "Data";
const transactionName = "Transaction";
const settingsName = "Setting";

const MainContainer = ({ naviagtion }) => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName={"Dashboard"}
        name={"Dashboard"}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 5,
            fontSize: 10,
          },
          tabBarStyle: {
            padding: 5,
            paddingTop: 10,
            backgroundColor: "black",
            height: Platform.OS === "android" ? 70 : 100,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // console.log(color.valueOf);
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === airtimeName) {
              iconName = focused ? "ios-call" : "ios-call-outline";
            } else if (rn === dataName) {
              iconName = focused ? "swap-vertical" : "swap-vertical-outline";
            } else if (rn === transactionName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen name="Balance" component={BalanceScreen} />
              <Stack.Screen name="FundAccount" component={FundAccount} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Buy Data" component={DataScreen} />
              <Stack.Screen name="Cable TV" component={CableTvScreen} />
              <Stack.Screen name="Buy Airtime" component={AirtimeScreen} />
              <Stack.Screen name="Electricity" component={ElectricityScreen} />
              <Stack.Screen name="Coming Soon" component={ComingsoonScreen} />
              <Stack.Screen name="Contact" component={ContactScreen} />
              <Stack.Screen
                name="Transactions"
                component={TransactionsScreen}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name={airtimeName}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Buy Airtime" component={AirtimeScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen
                name="Transactions"
                component={TransactionsScreen}
              />
              <Stack.Screen name="Buy Data" component={DataScreen} />
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen name="Cable TV" component={CableTvScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name={dataName}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Buy Data" component={DataScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen
                name="Transactions"
                component={TransactionsScreen}
              />
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen name="Cable TV" component={CableTvScreen} />
              <Stack.Screen name="Buy Airtime" component={AirtimeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name={transactionName}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Transactions"
                component={TransactionsScreen}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Buy Data" component={DataScreen} />
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen name="Cable TV" component={CableTvScreen} />
              <Stack.Screen name="Buy Airtime" component={AirtimeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name={settingsName}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen
                name="Transactions"
                component={TransactionsScreen}
              />
              <Stack.Screen name="Buy Data" component={DataScreen} />
              <Stack.Screen name="Dashboard" component={HomeScreen} />
              <Stack.Screen name="Cable TV" component={CableTvScreen} />
              <Stack.Screen name="Buy Airtime" component={AirtimeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default MainContainer;
