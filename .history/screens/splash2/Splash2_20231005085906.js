import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Splash2 = () => {
  const [loaded] = useFonts({
    lexendGiga: require("../../assets/fonts/lexendGiga/LexendGiga-SemiBold.ttf"),
    rubik: require("../../assets/fonts/rubik/Rubik-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["rgba(94, 159, 135, 0.29)", "#2D665F"]}
        style={{ flex: 1 }}
      >
        {/* Background Image */}
        <ImageBackground
          source={require("../../assets/images/secondSplash.png")}
          style={styles.imageBackground}
        >
          {/* Content */}
          <View style={{ flex: 0.6, backgroundColor: "#2D665F" }}></View>
          <View style={{ flex: 0.4, backgroundColor: "#2D665F" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.text}>Il y en assez pour </Text>
              <Text style={styles.text}>tout le monde</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Du contenu qui répond aux </Text>
              <Text style={styles.text2}>
                différentes inquiétudes des jeunes
              </Text>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: "#2D665F",
  },
  gradient: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Lexend Giga",
    fontSize: 28,
    fontWeight: "400",
  },
  text2: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Splash2;
