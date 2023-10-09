import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import styles from './welcome.style'
import { useFonts } from "expo-font";

const Welcome = ({ navigation }) => {

  const[loaded] = useFonts({
    lexen
  })
  const onPress = () => navigation.navigate("Home");

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
          flex: 0.3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "space-between", flex: 0.7 }}>
          <Text style={styles.bvn}>Bienvenue !</Text>
          <Text style={styles.bvnText}>
            Explorez notre application de santé sexuelle pour apprendre, poser
            des questions et obtenir des conseils personnalisés
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Je découvre</Text>
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
  bvn: {
    color: "#FFF",
    fontSize: 24,
  },
  bvnText: {
    color: "#ccc",
    textAlign: "justify",
    fontSize: 16,
    letterSpacing: 0.08,
  },
  topImageContainer: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    opacity: 0.1,
  },
  topImageStyle: {
    width: 250,
    height: 300,
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
  button: {
    backgroundColor: "white",
    borderRadius: 15, // Adjust the value as needed
    paddingVertical: 10, // Adjust the value as needed
    paddingHorizontal: 20, // Adjust the value as needed
    width: 377,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#2D665F", // Text color (you can change it)
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold", // You can adjust the font weight as needed
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
    width: 50,
    height: 106,
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

export default Welcome;
