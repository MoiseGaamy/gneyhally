import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import Splash1 from "../splash1/Splash1";
import Splash2 from "../splash2/Splash2";
import Splash3 from "../splash3/Splash3";

const SplashSwiper = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} autoplay activeDotColor="#fff">
        <Splash1 />
        <Splash2 />
        <Splash3 navigation={navigation} />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SplashSwiper;
