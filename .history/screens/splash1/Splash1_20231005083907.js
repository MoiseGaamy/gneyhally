import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Splash1 = () => {
  const [loaded] = useFonts({
    lexendGiga: require("../../assets/fonts/lexendGiga/LexendGiga-SemiBold.ttf"),
    rubik: require('../../assets/fonts/rubik/Rubik-Regular.ttf')
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
          source={require("../../assets/images/splash1.png")}
          style={styles.imageBackground}
        >
          {/* Content */}
          <View style={{ flex: 0.6, backgroundColor: "#2D665F" }}></View>
          <View style={{ flex: 0.4, backgroundColor: "#2D665F" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.text}>Prenez soins de </Text>
              <Text style={styles.text}>votre santé</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.text2}>Utilisez notre application pour </Text>
              <Text style={styles.text2}>apprendre sur la santé sexuelle</Text>
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
    fontFamily: "lexendGiga",
    fontSize: 28,
    fontWeight: "400",
  },
  text2: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Splash1;
