import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ParadeList from "";

const ThemeOpened = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.3,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row", // Display icons in a row
            justifyContent: "space-between", // Space the icons evenly
            width: "100%", // Make sure the icons cover the entire width
            alignItems: "center",
            padding: 10,
          }}
        >
          <View style={styles.roundedIcon}>
            <Ionicons name="ios-arrow-back" size={28} color="#93A19C" />
          </View>
          <View style={styles.roundedIcon}>
            <Ionicons name="search" size={28} color="#93A19C" />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: 32,
            }}
          >
            <Text
              style={{
                color: "#2D665F",
                fontWeight: "700",
                fontSize: 16,
                lineHeight: 18.96,
                letterSpacing: 0.5,
              }}
            >
              Grossesse précoce et prévention
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "lighblue",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.category}>
              <Text style={styles.textParticular}>Tout</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.text}>Articles</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.text}>videos</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.text}>Audios</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.7 }}>
        <ParadeList />
      </View>
    </View>
  );
};

export default ThemeOpened;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    // alignItems: "center",
  },
  roundedIcon: {
    height: "40%",
    width: "12%",
    backgroundColor: "white", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // Set borderRadius to half of the icon size to make it circula // Add padding to create space around the icon
  },
  category: {
    height: "40%",
    width: "18%",
    backgroundColor: "white", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  text: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.22,
    letterSpacing: 0.0125,
    color: "#93A19C",
  },
  textParticular: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.22,
    letterSpacing: 0.0125,
    color: "#5E9F87",
  },
});
