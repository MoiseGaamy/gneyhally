import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MenuThemeSelected = ({navigation}) => {
    const onPress = () => navigation.navigate("");
  const onPress = () => {
    ThemeOpened
    console.log("this is the one.");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0.2,
          justifyContent: "center",
          //   flexDirection: "row",
          alignItems: "flex-start",
          paddingHorizontal: 2,
        }}
      >
        {/* <View style={styles.iconContainer}>
          <View style={styles.roundedIcon}>
            <Ionicons name="ios-arrow-back" size={30} color="#93A19C" />
          </View>
          <View style={styles.roundedIcon}>
            <Ionicons name="ios-close" size={30} color="#93A19C" />
          </View>
        </View> */}
        <View style={{ flexDirection: "row", paddingHorizontal: 32 }}>
          <Image
            source={require("../../assets/images/medical.png")}
            style={{
              width: "8%",
              height: "100%",
              // top: 188,
              // left: 57,
              // borderRadius: 2,
              // You can add more styles here if needed
            }}
          />
          <Text style={styles.text}>Santé sexuelle et reproductive</Text>
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 32 }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3, // Shadow opacity (0 to 1)
          }}
        >
          <Text style={styles.text2}>
            Anatomie et physiologie du système reproducteur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>Changements pendant la puberté</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>Méthodes de contraception</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>Prévention et traitement des IST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>Grossesse précoce et prévention</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>
            Différentes méthodes de contraception
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF", // Background color of the button
            borderRadius: 5, // Rounded corners
            // padding: 10, // Padding around the text
            margin: 2,
            alignItems: "flex-start", // Center the text horizontally
            justifyContent: "center",
            shadowColor: "#000", // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.3,
          }}
        >
          <Text style={styles.text2}>
            Accès aux services de planification familiale en Guinée
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }}></View>
      {/* <Text style={styles.text}>MenuThemeSelected</Text> */}
    </SafeAreaView>
  );
};

export default MenuThemeSelected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // This centers content vertically
    // alignItems: "flex-start", // This centers content horizontally
    paddingVertical: 8,
    backgroundColor: "#F9F9F9",
  },
  text: {
    textAlign: "center", // This centers the text horizontally within the Text component
  },
  roundedIcon: {
    height: "50%",
    width: "12%",
    backgroundColor: "white", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    // Set borderRadius to half of the icon size to make it circula // Add padding to create space around the icon
  },
  iconContainer: {
    flexDirection: "row", // Display icons in a row
    justifyContent: "space-between", // Space the icons evenly
    width: "100%", // Make sure the icons cover the entire width
    paddingHorizontal: 10, // Add some horizontal padding for spacing
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18.96,
    letterSpacing: 0.5,
    textAlign: "center",
    color: "#2D665F",
  },
  text2: {
    fontWeight: "300", // Font weight
    fontSize: 16, // Font size
    lineHeight: 18.96, // Line height
    letterSpacing: 0, // Letter spacing
    color: "#93A19C",
    paddingHorizontal: 15,
  },
});
