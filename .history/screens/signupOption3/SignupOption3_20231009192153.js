import React, { useState } from "react";
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
  Platform,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
// import styles from './welcome.style'
import { useFonts } from "expo-font";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const SignupOption3 = ({ navigation }) => {
  const onPress = () => navigation.navigate("SignupOption4");
  const [email, onChangeEmail] = React.useState("Adresse email");
  const [mdp, onChangeMdp] = React.useState("Mot de passe");
  const [rmdp, onChangeRmdp] = React.useState("Répété le mot de passe");
  const [number, onChangeNumber] = React.useState("");

  const windowWith = useWindowDimensions().height;
  const padding = windowWith;
  const [code, setCode] = useState("------"); // Initialize with hyphens

  const handleTextChange = (text) => {
    // Remove any hyphens from the entered text
    const cleanedText = text.replace(/-/g, "");

    // Pad the code with hyphens as needed (up to 6 characters)
    const formattedCode = cleanedText
      .split("")
      .reverse()
      .join("")
      .padStart(6, "-");

    setCode(formattedCode);
  };

  const [loaded] = useFonts({
    lexendGiga: require("../../assets/fonts/lexendGiga/LexendGiga-SemiBold.ttf"),
    rubik: require("../../assets/fonts/rubik/Rubik-Regular.ttf"),
    rubik5: require("../../assets/fonts/rubik/Rubik-Light.ttf"),
    rubik7: require("../../assets/fonts/rubik/Rubik-Bold.ttf"),
    roboto4: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // return (
  //   <KeyboardAvoidingView
  //     behavior={`${padding}`}
  //     style={{
  //       flex: 1,
  //       minHeight: windowWith,
  //       backgroundColor: "#2D665F",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <View style={styles.topImageContainer}>
  //       <Image
  //         source={require("../../assets/images/Layer__.png")}
  //         style={styles.topImageStyle}
  //       />
  //     </View>
  //     <View
  //       style={{
  //         flex: 0.5,
  //         justifyContent: "space-evenly",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <View style={{ flex: 0.6 }}>
  //         <View>
  //           <Text style={styles.mid}>Code de vérification envoyé</Text>
  //         </View>
  //         <View
  //           style={{
  //             justifyContent: "center",
  //             alignItems: "center",
  //             marginVertical: 20,
  //             fontFamily: "roboto4",
  //           }}
  //         >
  //           <Text style={{ color: "#ccc" }}>
  //             Entrez les quatres chiffres qui
  //           </Text>
  //           <Text style={{ color: "#ccc" }}>
  //             ont été envoyés à l’adresse mail{" "}
  //           </Text>
  //           <Text style={{ marginVertical: 7, fontSize: 15, color: "#fff" }}>
  //             jeckodev@gmail.com
  //           </Text>
  //         </View>
  //       </View>
  //       <View style={{ flex: 0.4 }}>
  //         <TextInput
  //           style={styles.textInputStyle}
  //           value={code}
  //           onChangeText={handleTextChange}
  //           maxLength={9} // 6 digits and 3 hyphens
  //           keyboardType="numeric"
  //         />
  //       </View>
  //       <TouchableOpacity style={styles.button} onPress={onPress}>
  //         <Text style={styles.buttonText}>Renvoyer le code</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </KeyboardAvoidingView>
  // );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 36, marginVertical: 60, color: "#111" }}>
            Telegram
          </Text>
          <Text style={{ fontSize: 25, color: "#111" }}>
            Verify Phone Number
          </Text>
          <Text style={{ fontSize: 15, color: "#111" }}>
            Enter 4 digits code received on your phone
          </Text>
          <Text style={{ fontSize: 16, color: "#111", marginTop: 14 }}>
            + 300*******************32
          </Text>
          <View style={{ width: "100%", paddingHorizontal: 22 }}>
            <OTPInputView
              style={{ width: "100%", height: 200, paddingHorizontal: 32 }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={{
                width: 30,
                height: 45,
                color: "#f4a135",
                borderWidth: 0,
                borderBottomWidth: 3,
                borderBottomColor: "#111",
              }}
              codeInputHighlightStyle={{
                borderColor: "#2ab12f",
              }}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}`);
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#342342",
                paddingVertical: 12,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                paddingVertical: 16,
              }}
            >
              <Text style=>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    fontFamily: "rubik7",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#D1EBE1",
    alignItems: "center",
    justifyContent: "center",
  },
  topImageContainer: {
    flex: 0.2,
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
  option: {
    color: "#FFF",
    fontSize: 25,
    // fontFamily: 'Lexend Giga',
  },
  textInputStyle: {
    // fontFamily: 'Rubik',
    fontSize: 35,
    letterSpacing: 24,
    width: 250,
    color: "#FFF",
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
    fontFamily: "rubik5",
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
    // fill: "#5E9F87",
    opacity: 0.65,
    width: 205,
    height: 205,
    resizeMode: "contain",
  },
});

export default SignupOption3;
