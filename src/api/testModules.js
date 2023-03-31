import data from "../utils/database/1module.json";

export async function getTestModuleOneApi() {
  try {
    return data;
  } catch (error) {
    throw error;
  }
}
