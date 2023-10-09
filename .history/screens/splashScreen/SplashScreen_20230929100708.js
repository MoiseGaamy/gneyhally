import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.navigate("Splash1")}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <View style={{ flex: 0.5 }}></View>
        <View style={styles.topImageContainer}>
          <Image
            source={require("../../assets/images/Layer__.png")}
            style={styles.topImageStyle}
          />
        </View>
      </View>
      <Image
        source={require("../../assets/images/Layer_2.png")}
        style={styles.imageStyle}
      />
      <Text style={styles.text}>GNEYHALLY</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.bottomImageContainer}>
          <Image
            source={require("../../assets/images/Vector.png")}
            style={styles.bottomImageStyle}
          />
        </View>
        <View style={styles.bottomImageRightContainer}>
          <Image
            source={require("../../assets/images/mdi_leaf.png")}
            style={styles.bottomImageRightImage}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2D665F",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", 
    height: "70%", 
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
  topImageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    opacity: 0.2,
  },
  topImageStyle: {
    width: 450,
    height: 280,
    resizeMode: "contain",
    zIndex: 1,
    position: "absolute",
    left: -15,
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

export default SplashScreen;
