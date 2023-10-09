import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons"; // Import your icon libraries

const ParadeElement = ({ icon, imageSource, label, backgroundColor }) => {
  return (
    <View style={[styles.paradeElement, { backgroundColor }]}>
      <View style={{ flex: 1, position: "relative" }}>
        <View style={styles.iconContainer}>{icon}</View>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          width: "109%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          position: "absolute",
          top: 92,
        }}
      >
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const data = [
  {
    key: "1",
    icon: (
      <FontAwesome name="music" size={15} color="white" />
    ) /* Your icon component for item 1 */,
    imageSource: require("../../assets/images/firstCard.png"),
    label: "Pourquoi les filles tombent enceinte ?",
    backgroundColor: "#E7B7C8", // Background color for item 1
  },
  {
    key: "2",
    icon: <FontAwesome name="video-camera" size={15} color="white" />,
    imageSource: require("../../assets/images/"),
    label: "Comment préserver sa virginité ?",
    backgroundColor: "#FFBE88", // Background color for item 2
  },
  {
    key: "3",
    icon: (
      <FontAwesome name="music" size={15} color="white" />
    ) /* Your icon component for item 1 */,
    imageSource: require("../../../assets/images/last3.png"),
    label: "J’ai perdu ma virginité, je ne sais quoi faire",
    backgroundColor: "#F75010", // Background color for item 1
  },
  {
    key: "4",
    icon: <FontAwesome name="video-camera" size={15} color="white" />,
    imageSource: require("../../../assets/images/last2.png"),
    label: "J’ai perdu ma virginité, je ne sais quoi faire.",
    backgroundColor: "#FFE04D", // Background color for item 2
  },
  // Add more items as needed
];

const ParadeList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ParadeElement
          icon={item.icon}
          imageSource={item.imageSource}
          label={item.label}
          backgroundColor={item.backgroundColor}
        />
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  paradeElement: {
    borderRadius: 10,
    margin: 10,
    padding: 16,
    alignItems: "center",
    position: "relative", // Make the main container relative for positioning the label
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 5,
    right: 0,
    alignItems: "flex-end",
    margin: 30,
  },
  image: {
    width: 180,
    height: 130,
    marginBottom: 10,
  },
  labelContainer: {
    position: "absolute",
    bottom: 0, // Adjust the vertical position from the bottom as needed
    left: 0,
    right: 0,
    backgroundColor: "transparent", // Transparent background color for the label container
    zIndex: 1, // Ensure that the label container appears on top
  },
  label: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.96,
    letterSpacing: 0.005, // To represent 0.5% letter spacing
    textAlign: "left",
    color: "#2D665F",
  },
});

export default ParadeList;
