import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default {
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
};
