import { Colors } from "./Colors";

export const CommonStyles = {
  titleStyles: {
    fontFamily: "Roboto-Regular",
    fontSize: 36,
    color: Colors.title,
    marginBottom: 10,
  },
  subTitleStyles: {
    padding: 10,
    backgroundColor: Colors.complementary,
    borderRadius: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 24,
    color: Colors.title,
    marginBottom: 20,
  },
  textStyle: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: Colors.primaryText,
    marginBottom: 20,
  },
  textInputStyle: {
    padding: 5,
    paddingHorizontal: 10,
    height: 60,
    borderColor: Colors.primary,
    borderBottomWidth: 3,
    marginBottom: 15,
    width: "80%",
    fontSize: 18,
  },
};

export default CommonStyles;
