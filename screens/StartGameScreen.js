import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4, //for only android
    shadowColor: "black", //for iOS
    shadowOffset: { width: 0, height: 2 }, //for iOS
    shadowRadius: 6, //for iOS
    shadowOpacity: 0.25, //for iOS
  },
});

export default StartGameScreen;
