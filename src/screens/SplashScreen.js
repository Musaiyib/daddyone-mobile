import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { animation } from "../assets/animation";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  const checkIfAuthenticated = async () => {
    try {
      const user = await SecureStore.getItemAsync("user");
      if (user) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  return <LottieView source={animation} progress={225} speed={225} />;
};

export default SplashScreen;

const styles = StyleSheet.create({});
