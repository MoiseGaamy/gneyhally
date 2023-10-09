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
import { useFonts } from "expo-font";

const SignupOption2 = ({ navigation }) => {
  const onPress = () => navigation.navigate("SignupOption3");
  const [email, onChangeEmail] = React.useState("");
  const [mdp, onChangeMdp] = React.useState("");
  const [rmdp, onChangeRmdp] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const windowWith = useWindowDimensions().height;
  const padding = windowWith;

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
          flex: 0.5,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={styles.option}>Créez votre compte</Text>
        <TextInput
          style={styles.button}
          placeholder="Adresse email"
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.button}
          placeholder="Mot de passe"
          onChangeText={onChangeMdp}
          value={mdp}
        />
        <TextInput
          style={styles.button}
          placeholder="Répété le mot de passe"
          onChangeText={onChangeRmdp}
          value={rmdp}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>S’inscrire</Text>
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
  // mid: {
  //   fontFamily: "lexendGiga",
  //   fontSize: 22,
  //   fontWeight: "600",
  //   textAlign: "center",
  //   color: "#D1EBE1",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // sante: {
  //   color: "#FFF",
  //   textAlign: "center",
  //   fontFamily: "Rubik",
  //   fontSize: 16,
  //   fontStyle: "normal",
  //   letterSpacing: 0.08,
  // },
  topImageContainer: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    backgroundColor:"yellow",
    opacity: 0.1,
  },
  // topImageStyle: {
  //   width: 250,
  //   height: 300,
  //   resizeMode: "contain",
  //   zIndex: 1,
  //   position: "absolute",
  //   left: -5,
  // },
  // option: {
  //   color: "#FFF",
  //   fontSize: 25,
  //   fontFamily: "rubik7",
  // },
  // textInputStyle: {
  //   // fontFamily: 'Rubik',
  //   fontSize: 14,
  //   fontStyle: "normal",
  //   fontWeight: 500,
  //   lineHeight: "normal",
  //   letterSpacing: 0.175,
  // },
  // button: {
  //   backgroundColor: "white",
  //   borderRadius: 10, // Adjust the value as needed
  //   // paddingVertical: 10, // Adjust the value as needed
  //   paddingHorizontal: 20, // Adjust the value as needed
  //   justifyContent: "center",
  //   width: 277,
  //   height: 55,
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  // buttonText: {
  //   color: "#2D665F", // Text color (you can change it)
  //   textAlign: "center",
  //   fontSize: 16,
  //   justifyContent: "center",
  //   alignItems: "space-evenly",
  //   fontWeight: "bold", // You can adjust the font weight as needed
  // },
  // text: {
  //   width: 278,
  //   height: 57,
  //   color: "#FFF",
  //   textAlign: "center",
  //   // fontFamily: 'LexendGiga-Regular',
  //   fontSize: 32,
  //   fontWeight: "600",
  //   lineHeight: 40,
  //   letterSpacing: -1.76,
  // },
  // imageStyle: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   resizeMode: "contain",
  // },

  // bottomImageContainer: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  //   color: "green",
  // },
  // bottomImageStyle: {
  //   width: 219,
  //   height: 220,
  //   resizeMode: "contain",
  //   color: "green",
  // },
  // bottomImageRightContainer: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  // bottomImageRightImage: {
  //   // fill: '#5E9F87',
  //   opacity: 0.65,
  //   width: 205,
  //   height: 205,
  //   resizeMode: "contain",
  // },
});

export default SignupOption2;
