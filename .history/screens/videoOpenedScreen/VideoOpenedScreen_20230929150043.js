import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import ProgressBar from "../progressBar/ProgressBar";

const VideoOpenedScreen = () => {
  const handlePlayPress = () => {
    // Handle play button press here
    // You can implement logic to start playing a video or audio, for example.
    console.log("Play button pressed");
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, paddingTop: 5 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#9eb051",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            opacity: 0.8,
          }}
        >
          <Image
            source={require("../../assets/images/")}
            style={{
              width: "100%",
              height: "100%",
              // top: 188,
              // left: 57,
              //   borderRadius: 2,
              // You can add more styles here if needed
            }}
          />
        </View>
        <View style={styles.roundedIcon}>
          <Ionicons name="ios-arrow-back" size={30} color="#93A19C" />
        </View>
      </View>
      <TouchableOpacity
        onPress={handlePlayPress}
        style={{ position: "absolute", top: 100, left: 170 }}
      >
        <View style={styles.playButton}>
          <Feather name="play" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <View style={{ position: "relative", bottom: 60, left: 50 }}>
        <ProgressBar progress={30} />
        <View
          style={{
            // flex: 0.4,
            flexDirection: "row",
            // justifyContent: "",
            // alignItems: "center",
            marginVertical: 4,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 10, color: "white" }}>00:59 / 03:44</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "flex-end",
              flexDirection: "row",
              //   marginLeft: 140,
            }}
          >
            <Text style={{ marginRight: 6, fontSize: 12, color: "white" }}>
              Répéter
            </Text>
            <FontAwesome name="repeat" size={20} color="white" />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 18.96,
              letterSpacing: 0.005, // To represent 0.5% letter spacing
              textAlign: "center",
              color: "#2D665F",
            }}
          >
            Le rôle du préservatif
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingHorizontal: 16,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="heart" size={20} color="red" />
              <Text style={{ marginHorizontal: 8, color: "#93A19C" }}>24</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 4 }}>
              <AntDesign name="sharealt" size={20} color="#93A19C" />
              <Text style={{ marginHorizontal: 8, color: "#93A19C" }}>6</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#2cbcf5",
          width: "7%",
          height: "3%",
          borderRadius: 25,
          position: "absolute",
          top: 320,
          left: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>L</Text>
      </View>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            // alignItems: "center",
            padding: 18,
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 18.96,
              letterSpacing: 0.005,
              color: "#2D665F",
            }}
          >
            Tags:
          </Text>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Sex</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Grossesse</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Abstinance</Text>
          </View>
          <View style={[styles.category, { marginTop: 8 }]}>
            <Text style={{ color: "#5E9F87" }}>MST</Text>
          </View>
          <View style={[styles.category, { marginTop: 8 }]}>
            <Text style={{ color: "#5E9F87" }}>IST</Text>
          </View>
          <View style={[styles.category, { marginTop: 8 }]}>
            <Text style={{ color: "#5E9F87" }}>Protection</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoOpenedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  roundedIcon: {
    flex: 1,
    height: "15%",
    width: "15%",
    backgroundColor: "white", // Background color of the rounded view
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 20,
    top: 50,
    // Set borderRadius to half of the icon size to make it circula // Add padding to create space around the icon
  },
  category: {
    height: "20%",
    width: "25%",
    // color: "#5E9F87", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // margin: 8,
    backgroundColor: "#D1EBE1",
  },
  playButton: {
    width: "40%", // 50% of the parent container's width
    aspectRatio: 1, // To maintain a 1:1 aspect ratio (square button)
    borderRadius: 40, // To make it circular
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  playButtonText: {
    color: "white",
    fontSize: 14,
  },
});
