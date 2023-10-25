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
    icon: "youtube", // You can change the icon name based on your needs
    image: require("../../../assets/images/firstCard.png"), // Replace with your image path
    backgroundColor: "#E7B7C8",
    contentlanguage: "Malinke",
  },
  {
    id: "2",
    title: "Card 2",
    description: "D’où vient le sperme ?",
    icon: "youtube", // You can change the icon name based on your needs
    image: require("../../../assets/images/secondCard.png"), // Replace with your image path
    backgroundColor: "#47CACC",
    contentlanguage: "Malinke",
  },
  {
    id: "3",
    title: "Card 3",
    description: "Pourquoi les filles tombent enceinte ?",
    icon: "youtube", // You can change the icon name based on your needs
    image: require("../../../assets/images/firstCard.png"), // Replace with your image path
    backgroundColor: "#D1EBE1",
    contentlanguage: "Malinke",
  },
  {
    id: "4",
    title: "Card 4",
    description: "D’où vient le sperme ?.",
    icon: "youtube", // You can change the icon name based on your needs
    image: require("../../../assets/images/secondCard.png"), // Replace with your image path
    backgroundColor: "#FFBE88",
    contentlanguage: "Malinke",
  },
];

// Custom Card component
// ActionAuthentication

function CardItem({ item, navigation }) {
  const onPress = () => navigation.navigate("ActionAuthentication");
  // const onPress = ()=>(console.log('this is it.'));

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]}
    >
      <View style={styles.iconOverlay2}>
        {item.contentlanguage === "Malinke" && (
          <Text style={styles.secondShadowText}>Malinke</Text>
        )}
      </View>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.iconOverlay}>
        {item.icon === "youtube" && (
          <View style={{ flexDirection: "row" }}>
            <Entypo name="youtube" size={15} color="white" />
            <Text style={{ color: "white", fontSize: 9, marginLeft: 4 }}>
              Video
            </Text>
          </View>
        )}
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
    </TouchableOpacity>
  );
}

export default function Parade1({ navigation }) {
  return (
    <FlatList
      data={cardData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardItem item={item} navigation={navigation} />
      )}
      horizontal={true} // To display cards horizontally
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: "green",
    width: 150,
    margin: 10,
    justifyContent: "space-evenly",
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
    justifyContent: "center",
    alignItems: "center",
  },
  iconOverlay: {
    position: "absolute",
    top: 8,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    padding: 2,
    flexDirection: "row",
  },
  secondShadowText: {
    fontSize: 8,
    color: "white",
  },
  iconOverlay2: {
    position: "absolute",
    top: 9,
    left: 5,
    width: 40,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 4,
    padding: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
