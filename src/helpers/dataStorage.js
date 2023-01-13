import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const key = "user";

export const getStoredData = async () => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    // alert("🔐 Here's your value 🔐 \n" + result);
    return result;
  } else {
    return false;
  }
};

export const saveData = async (data) => {
  // console.log(data);
  await SecureStore.setItemAsync(key, JSON.stringify(data));
};

export const removeData = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("successful");
  } catch (err) {
    console.log(err);
  }
};
