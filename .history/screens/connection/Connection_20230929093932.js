import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
// import styles from './welcome.style'

const Connection = ({ navigation }) => {
  const onPress = () => navigation.navigate("Welcome");
  const [email, onChangeEmail] = React.useState("Adresse email");
  const [mdp, onChangeMdp] = React.useState("Mot de passe");
  const [rmdp, onChangeRmdp] = React.useState("Répété le mot de passe");
  const [number, onChangeNumber] = React.useState("");

  const windowWith = useWindowDimensions().height;
  const padding = windowWith;

  return (
    <KeyboardAvoidingView
      behavior={`${padding}`}
      style={{
        flex: 1,
        minHeight: windowWith,
        backgroundColor: "#2D665F",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <Text style={styles.option}>Connectez-vous</Text>
        <TextInput
          style={styles.button}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.button}
          onChangeText={onChangeMdp}
          value={mdp}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Connection</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    // fontFamily: 'Lexend Giga',
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#D1EBE1",
    alignItems: "center",
    justifyContent: "center",
  },
  sante: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Rubik",
    fontSize: 16,
    fontStyle: "normal",
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
  option: {
    color: "#FFF",
    fontSize: 25,
    // fontFamily: 'Lexend Giga',
  },
  textInputStyle: {
    // fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: 0.175,
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
    alignItems: "space-evenly",
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
    fill: "#5E9F87",
    opacity: 0.65,
    width: 205,
    height: 205,
    resizeMode: "contain",
  },
});

export default Connection;
