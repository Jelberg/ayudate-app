import { URL_LINK_VIDEOS } from "../utils/constants";
import axios from "axios";
import data from "../utils/database/videos.json";

export async function getListVideosApi() {
  try {
    //const response = await axios.get(URL_LINK_VIDEOS);
    //return response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
