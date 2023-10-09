import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, EvilIcons, Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import NouvelleDiscussionModal from "./NouvelleDiscussionModal";

const AiHomeNewDiscussion = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handlePlayPress = () => {
    // Handle play button press here
    // You can implement logic to start playing a video or audio, for example.
    console.log("Play button pressed");
  };
  const cardData = [
    {
      id: "1",
      title: "Calculeur de règle menstruelle",
      description: "Pourquoi les filles tombent enceinte ?",
      icon: "music",
      image: require("../../assets/images/firstCard.png"),
      backgroundColor: "#FFBE88",
    },
    {
      id: "2",
      title: "Calculeur de règle menstruelle",
      description: "D’où vient le sperme ?",
      icon: "video-camera",
      image: require("../../assets/images/secondCard.png"),
      backgroundColor: "#E7B7C8",
    },
    {
      id: "3",
      title: "Sans titre",
      description: "Pourquoi les filles tombent enceinte ?",
      icon: "image",
      image: require("../../assets/images/firstCard.png"),
      backgroundColor: "#CDB3D4",
    },
    {
      id: "4",
      title: "Sans titre",
      description: "D’où vient le sperme ?.",
      icon: "file",
      image: require("../../assets/images/secondCard.png"),
      backgroundColor: "#FFBE88",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View
          style={{
            flex: 1,
            //   backgroundColor: "gray",
            justifyContent: "space-around",
            //   marginHorizontal: 20,
            //   alignItems: "center",
            //   flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              // marginHorizontal: 20,
              // alignContent: "center",
              // justifyContent:'center',
              marginTop: 20,
            }}
          >
            <View
              style={{
                width: "18%", // 20% of the parent container's width
                height: "40%", // 20% of the parent container's height
                borderRadius: 20,
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EvilIcons name="close" size={35} color="#93A19C" />
            </View>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 23.7,
                fontWeight: "500",
                letterSpacing: 0.15,
                textAlign: "left",
                left: 60,
                color: "#2D665F",
              }}
            >
              Demande-moi
            </Text>
          </View>
          <View style={styles.leafStyle}>
            <Image
              source={require("../../assets/images/leaf.png")}
              style={{
                width: "50%",
                height: "50%",
                // top: 188,
                // left: 57,
                //   borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View
          style={{
            flex: 0.8,
            width: "80%", // Width as a percentage of its parent container

            borderTopLeftRadius: 0, // Top-left corner radius in pixels
            borderTopRightRadius: 25, // Top-right corner radius in pixels
            borderBottomLeftRadius: 25, // Bottom-left corner radius in pixels
            borderBottomRightRadius: 25, // Bottom-right corner radius in pixels
            opacity: 0.6,
            backgroundColor: "#93A19C",
            //   justifyContent: "center",
            // alignItems:'center',
            alignSelf: "center",
            padding: 20,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 14,
              lineHeight: 16.59,
              letterSpacing: 0.25,
              color: "#0B3038",
            }}
          >
            Bienvenue !
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 16.59,
              letterSpacing: 0,
              color: "#0B3038",
            }}
          >
            Bonjour Kadiatou ! Comment ça va aujourd’hui ? J’espère que tu
            continues à mettre en pratique tous les conseils que je te donne 🥰
          </Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={{ color: "#93A19C", left: 40 }}>Nos discussions</Text>
        <View style={styles.container2}>
          <FlatList
            data={cardData}
            renderItem={({ item }) => (
              <View
                style={[styles.box, { backgroundColor: item.backgroundColor }]}
              >
                <Text style={styles.boxTitle}>{item.title}</Text>
                <TouchableOpacity style={styles.continueBox}>
                  <Text style={styles.buttonText}>Continuer</Text>
                  <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
          />
        </View>
      </View>
      <View style={styles.fourthContainer}>
        <Text style={{ color: "#93A19C", left: 30 }}>Sujets suggérés</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <View style={styles.category}>
            <Text style={styles.text}>Calcule mes règles</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.text}>Je suis enceinte</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.text}>L’abstinance</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.text}>Trop jeune pour le mariage</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.text}>Je veux rester vierge</Text>
          </View>
        </View>
      </View>
      <View style={styles.fithContainer}>
        <TouchableOpacity
          onPress={toggleModal}
          style={{ position: "absolute", top: 50, left: 310 }}
        >
          <View style={styles.playButton}>
            <Entypo name="plus" size={35} color="white" />
          </View>
        </TouchableOpacity>
        <NouvelleDiscussionModal
          visible={modalVisible}
          closeModal={toggleModal}
          navigation=
        />
      </View>
    </View>
  );
};

export default AiHomeNewDiscussion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    // alignItems: "center",
  },
  firstContainer: {
    // backgroundColor: "green",
    flex: 1,
  },
  secondContainer: {
    // backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  thirdContainer: {
    // backgroundColor: "red",
    flex: 1,
  },
  fourthContainer: {
    // backgroundColor: "lightgreen",
    marginTop: 15,
    flex: 1,
  },
  fithContainer: {
    // backgroundColor: "lightyellow",l
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  leafStyle: {
    flex: 1,
    width: "50%", // 50% of the parent container's width
    aspectRatio: 1, // To maintain a 1:1 aspect ratio (square button)
    borderRadius: 80, // To make it circular
    backgroundColor: "#5E9F87",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // marginVertical: 10,
  },
  category: {
    height: "22%",
    width: "30%",
    backgroundColor: "#d7e0dd", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  text: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.22,
    letterSpacing: 0.0125,
    color: "#93A19C",
  },
  playButton: {
    width: "40%", // 50% of the parent container's width
    aspectRatio: 1, // To maintain a 1:1 aspect ratio (square button)
    borderRadius: 40, // To make it circular
    backgroundColor: "#5E9F87",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    // marginBottom: 20,
  },
  box: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    // alignItems: "center",
    justifyContent: "space-around",
    width: width * 0.4, // 50% of the screen width
    height: height * 0.2, // 50% of the screen height
    // backgroundColor: "lightblue",
    opacity: 0.8,
    // width: "100%",
    // height: "100%",
    marginBottom: 20,
  },
  continueBox: {
    // flex: 1,
    color: "white",
    backgroundColor: "#2D665F",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    padding: 4,
  },
  boxImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  boxTitle: {
    color: "#2D665F",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18.96,
    // letterSpacing: 0.5,
  },
  boxDescription: {
    fontSize: 13,
    color: "white",
  },
  button: {
    backgroundColor: "#2D665F",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
    marginRight: 5,
  },
});
