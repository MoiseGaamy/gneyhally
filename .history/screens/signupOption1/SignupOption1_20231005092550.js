import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
// import styles from './welcome.style'
import { useFonts } from "expo-font";

const SignupOption1 = ({ navigation }) => {
  const onPress = () => navigation.navigate("SignupOption2");
  const [loaded] = useFonts({
    lexendGiga: require("../../assets/fonts/lexendGiga/LexendGiga-SemiBold.ttf"),
    rubik: require("../../assets/fonts/rubik/Rubik-Regular.ttf"),
    rubik5: require("../../assets/fonts/rubik/Rubik-Light.ttf"),
    rubik7: require("../../assets/fonts/rubik/Rubik-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/images/Layer__.png")}
          style={styles.topImageStyle}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={styles.option}>Choisisez une option</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
            source={require("../../assets/images/mail.png")}
            style={styles.imageStyle}
          />
          <Text style={styles.buttonText}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.imageStyle}
          />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
            source={require("../../assets/images/fb.png")}
            style={styles.imageStyle}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2D665F",
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    // fontFamily: "Lexend Giga",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#D1EBE1",
    alignItems: "center",
    justifyContent: "center",
  },
  topImageContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    opacity: 0.1,
  },
  topImageStyle: {
    width: 300,
    height: 350,
    resizeMode: "contain",
    zIndex: 1,
    position: "absolute",
    left: -5,
  },
  sante: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Rubik",
    fontSize: 16,
    fontStyle: "normal",
    letterSpacing: 0.08,
  },
  option: {
    color: "#FFF",
    fontSize: 25,
    fontFamily: "rubik7",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10, // Adjust the value as needed
    // paddingVertical: 10, // Adjust the value as needed
    paddingHorizontal: 20, // Adjust the value as needed
    justifyContent: "center",
    width: 277,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#2D665F", // Text color (you can change it)
    textAlign: "center",
    fontSize: 16,
    justifyContent: "center",
    fontFamily: "rubik5",
    alignItems: "space-around",
    left
    fontWeight: "700", // You can adjust the font weight as needed
  },
  text: {
    width: 278,
    height: 57,
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "LexendGiga-Regular",
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 40,
    letterSpacing: -1.76,
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },

  bottomImageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    color: "green",
  },
  bottomImageStyle: {
    width: 219,
    height: 220,
    resizeMode: "contain",
    color: "green",
  },
  bottomImageRightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomImageRightImage: {
    // fill: "#5E9F87",
    opacity: 0.65,
    width: 205,
    height: 205,
    resizeMode: "contain",
  },
});

export default SignupOption1;
