import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./screens";

const AuthNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
      s
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
