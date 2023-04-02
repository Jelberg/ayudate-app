import data_module_one from "../utils/database/1module.json";
import data_module_two from "../utils/database/2module.json";
import data_module_three from "../utils/database/3module.json";
import data_module_four from "../utils/database/4module.json";

export async function getTestModuleApi(module) {
  try {
    switch (module) {
      case 1:
        console.log("test module ONE");
        return data_module_one;
      case 2:
        console.log("test module TWO");
        return data_module_two;
      case 3:
        console.log("test module THREE");
        return data_module_three;
      case 4:
        console.log("test module Four");
        return data_module_four;
    }
  } catch (error) {
    throw error;
  }
}
