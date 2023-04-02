import data from "../utils/database/videos.json";

export async function getListVideosApi() {
  try {
    return data;
  } catch (error) {
    throw error;
  }
}
