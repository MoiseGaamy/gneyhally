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
} from "react-native";

const AuthenticationModal = ({ visible, closeModal }) => {
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
            padding: "5%", // Adjust this percentage value as needed
            borderRadius: 10,
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80%", // Adjust this percentage value as needed
            height: "40%", // Adjust this percentage value as needed
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
                fontWeight: "500",
                fontSize: 20,
                lineHeight: 23.7,
                letterSpacing: 0.15,
                textAlign: "center",
                color: "#2D665F",
              }}
            >
              Authentification requise
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 18,
                lineHeight: 18.96,
                letterSpacing: 0.005,
                textAlign: "center",
                color: "#5A5A5A",
              }}
            >
              Connectes toi pour éffectuer cette action.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#5E9F87",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              width: "90%", // 50% of the parent container's width
              height: "17%", // 10% of the parent container's height
            }}
            onPress={() => closeModal()}
          >
            <Text style={{ color: "#FFFFFF" }}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "90%", // 50% of the parent container's width
              height: "17%", // 10% of the parent container's height
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#5E9F87", // Replace 'yourBorderColor' with your desired color
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => closeModal()}
          >
            <Text style={{ color: "#5E9F87" }}>Créer un compte</Text>
          </TouchableOpacity>
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
});

export default AuthenticationModal;
