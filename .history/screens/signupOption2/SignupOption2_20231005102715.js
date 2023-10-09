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
          flex: 0.7,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={styles.option}>Créez votre compte</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>S’inscrire</Text>
          </TouchableOpacity>
        </View>
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

  topImageContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    opacity: 0.1,
  },
  topImageStyle: {
    width: "150%",
    height: "105%",
    resizeMode: "contain",
    zIndex: 1,
    position: "absolute",
    left: -7,
  },
  option: {
    flex: 0.2,
    color: "#FFF",
    fontSize: 25,
    fontFamily: "rubik7",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    width: 277,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#2D665F",
    textAlign: "center",
    fontSize: 15,
    justifyContent: "center",
    fontFamily: "rubik5",
    alignItems: "center",
    fontWeight: "700",
  },
});

export default SignupOption2;
