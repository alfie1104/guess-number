import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View>
        <Image source={require("../assets/images/success.png")} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 200,
  },
});
