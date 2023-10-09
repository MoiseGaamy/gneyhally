import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons"; // Import your icon libraries

// Data for your card items
const cardData = [
  {
    id: "1",
    title: "Card 1",
    description: "Pourquoi les filles tombent enceinte ?",
    icon: "music", // You can change the icon name based on your needs
    image: require("../../../assets/images/firstCard.png"), // Replace with your image path
    backgroundColor: "#E7B7C8",
  },
  {
    id: "2",
    title: "Card 2",
    description: "D’où vient le sperme ?",
    icon: "video-camera", // You can change the icon name based on your needs
    image: require("../../../assets/images/secondCard.png"), // Replace with your image path
    backgroundColor: "#47CACC",
  },
  {
    id: "3",
    title: "Card 3",
    description: "Pourquoi les filles tombent enceinte ?",
    icon: "image", // You can change the icon name based on your needs
    image: require("../../../assets/images/firstCard.png"), // Replace with your image path
    backgroundColor: "#D1EBE1",
  },
  {
    id: "4",
    title: "Card 4",
    description: "D’où vient le sperme ?.",
    icon: "file", // You can change the icon name based on your needs
    image: require("../../../assets/images/secondCard.png"), // Replace with your image path
    backgroundColor: "#FFBE88",
  },
];

// Custom Card component
function CardItem({ item }) {
  return (
    <T
      style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.iconOverlay}>
        {item.icon === "music" && (
          <FontAwesome name="music" size={15} color="white" />
        )}
        {item.icon === "video-camera" && (
          <FontAwesome name="video-camera" size={15} color="white" />
        )}
        {item.icon === "image" && (
          <MaterialIcons name="image" size={15} color="white" />
        )}
        {item.icon === "file" && <Entypo name="file" size={15} color="white" />}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </T>
  );
}

export default function Parade1() {
  return (
    <FlatList
      data={cardData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardItem item={item} />}
      horizontal={true} // To display cards horizontally
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    width: 150,
    margin: 10,
    // padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 3,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
  iconOverlay: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 12,
    padding: 4,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#2D665F",
  },
});
