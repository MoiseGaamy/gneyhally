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

const NouvelleDiscussionModal = ({ visible, closeModal ,navigation}) => {
    const onPress = () => navigation.navigate("NewDiscussion");
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
            width: 300,
            height: 250,
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
            <Text style={styles.nameText}>Nouvelle discussion</Text>
          </View>
          <View>
            <View style={styles.boxStyle}>
              <Text style={{ color: "#93A19C", textAlign: "center" }}>
                Titre de la discussion!
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "200",
                fontStyle: "italic",
                fontSize: 10,
                lineHeight: 11.85,
                letterSpacing: 0,
                paddingTop: 7,
              }}
            >
              Pas plus de 30 caractères
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                // backgroundColor: "#D1EBE1",
                width: 100,
                height: 40,
                borderColor: "#93A19C",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 10,
              }}
              onPress={() => closeModal()}
            >
              <Text style={{ color: "#93A19C" }}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#5E9F87",
                width: 100,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={onPress}
            >
              <Text style={{ color: "#ffff" }}>Confirmer</Text>
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

export default NouvelleDiscussionModal;
