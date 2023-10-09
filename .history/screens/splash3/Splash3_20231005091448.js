import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import styles from './welcome.style'
import { useFonts } from "expo-font";

const Splash3 = ({ navigation }) => {
  const onPress = () => navigation.navigate("Connection");
  const [loaded] = useFonts({
    lexendGiga: require("../../assets/fonts/lexendGiga/LexendGiga-SemiBold.ttf"),
    rubik: require("../../assets/fonts/rubik/Rubik-Regular.ttf"),
    rubik5: require("../../assets/fonts/rubik/Rubik-Light.ttf"),
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
        style={{ flex: 0.1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Image
          source={require("../../assets/images/Layer_2.png")}
          style={styles.imageStyle}
        />
        <Text style={styles.text}>GNEYHALLY</Text>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.mid}>Rejoignez-nous</Text>
          <Text style={styles.mid}>maintenant</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.sante}>Votre santé avant tout</Text>
        </View>
      </View>

      <View style={{ flex: 0.2, justifyContent: "" ,alignItems:'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignupOption1")}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <Text
          style={{ color: "#fff", textAlign: "center", fontFamily: "rubik5" }}
        >
          Ignorer pour l'instant
        </Text>
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
    fontFamily: "lexendGiga",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#D1EBE1",
    alignItems: "center",
    justifyContent: "center",
  },
  topImageContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    opacity: 0.1,
  },
  topImageStyle: {
    width: 300,
    height: 270,
    resizeMode: "contain",
    zIndex: 1,
    position: "absolute",
    left: -5,
  },
  sante: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "rubik",
    fontSize: 16,
    fontStyle: "normal",
    letterSpacing: 0.08,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10, // Adjust the value as needed
    paddingVertical: 10, // Adjust the value as needed
    paddingHorizontal: 20, // Adjust the value as needed
    width: 277,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#2D665F", // Text color (you can change it)
    textAlign: "center",
    fontSize: 15,
    fontFamily: "rubik5",
    fontWeight: "bold", // You can adjust the font weight as needed
  },
  text: {
    width: 278,
    height: 57,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "lexendGiga",
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

export default Splash3;
