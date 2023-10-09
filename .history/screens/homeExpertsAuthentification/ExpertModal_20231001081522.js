import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ExpertModal = ({ visible, closeModal, navigation }) => {
  const onPress = () => navigation.navigate("");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80%",
            height: "70%",
            ...Platform.select({
              ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 4,
              },
              android: {
                elevation: 5,
              },
            }),
          }}
        >
          <View>
            <Text
              style={{
                color: "#2D665F",
                fontWeight: "400",
                fontSize: 18,
                lineHeight: 23.7,
                letterSpacing: 0.0015, // React Native accepts values in em units, so 0.15% becomes 0.0015
                textAlign: "center",
              }}
            >
              Obtiens de précieux conseils en toute confiance !
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 18.96,
                letterSpacing: 0.08, // React Native accepts values in em units, so 0.5% becomes 0.08
                textAlign: "left",
              }}
            >
              Pour avoir accès à cette section, tu dois te connecter ou créer un
              compte.
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/doctor.png")}
              style={{
                // width: "80%",
                // height: "40%",
                resizeMode: "contain",
                // top: 188,
                // left: 57,
                //   borderRadius: 2,
                // You can add more styles here if needed
              }}
              onError={(error) => console.log("image load error:", error)}
            />
          </View>
          <View
            style={{
              //   flexDirection: "row",
              justifyContent: "space-between",
              //   alignContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#5E9F87",
                width: 250,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginBottom: 15,
              }}
              onPress={onPress}
            >
              <Text style={{ color: "#ffff" }}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#D1EBE1",
                width: 250,
                height: 40,
                borderColor: "#93A19C",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 10,
              }}
              onPress={onPress}
            >
              <Text style={{ color: "#93A19C" }}>Créer un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  nameText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 23.7,
    letterSpacing: 0.15,
    textAlign: "left",
    color: "#2D665F",
  },
  boxStyle: {
    width: windowWidth * 0.5, // 50% width of the screen
    // height: windowHeight * 0.2, // 10% height of the screen
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});

export default ExpertModal;
