import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "../utils/constants";

export async function createUserApi(user) {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const response = await AsyncStorage.getItem(USER_STORAGE);
    const result = response ? JSON.parse(response) : [];
    if (result.username === username && result.password === password)
      return result;
    else return [];
  } catch (error) {
    throw error;
  }
}
