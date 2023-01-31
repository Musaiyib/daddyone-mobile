import React, { useEffect, useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, AppRegistry, Text } from "react-native";
import MainContainer from "./src/MainContainer";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import { theme } from "./src/core/theme";
import { getStoredData } from "./src/helpers/dataStorage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  SplashScreen,
} from "./src/screens";

function App() {
  const [user, setUser] = useState(null);
  let [fontsLoaded, error] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getStoredData()
      .then((res) => setUser(JSON.parse(res)))
      .catch((error) => console.error(error));
  }, [user]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView;
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <NavigationContainer
          style={{ fontFamily: "OpenSans_400Regular" }}
          theme={theme}
        >
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Dashboard" component={MainContainer} />
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
AppRegistry.registerComponent(appName, () => Main);

export default App;
