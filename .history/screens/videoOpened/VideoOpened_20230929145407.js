import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const VideoOpened = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, paddingTop: 5 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("../../assets/")}
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
      <View
        style={{
          flex: 0.1,
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
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

export default VideoOpened;

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
});
