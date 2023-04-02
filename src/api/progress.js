import { PROGRESS_STORAGE } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function addProgressApi(progressUser) {
  try {
    const newProgress = await getProgressUserAPi();
    const list = newProgress.filter(
      (element) => element.module.module != progressUser.module.module
    );
    const progress = newProgress.filter(
      (element) => element.module.module === progressUser.module.module
    );

    /*if (progress.length) {
      if (progress.module.porcentage < progressUser.module.porcentage) {
        list.push(progressUser);
        return true;
      } else {
        return false;
      }
    }*/
    list.push(progressUser);
    await AsyncStorage.setItem(PROGRESS_STORAGE, JSON.stringify(list));
    return true;
  } catch (error) {
    throw error;
  }
}

export async function getProgressUserAPi() {
  try {
    const response = await AsyncStorage.getItem(PROGRESS_STORAGE);
    const result = response ? JSON.parse(response) : [];
    //console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
