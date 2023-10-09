import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, EvilIcons, Feather } from "@expo/vector-icons";

const AiHomeFirst = () => {
  const handlePlayPress = () => {
    // Handle play button press here
    // You can implement logic to start playing a video or audio, for example.
    console.log("Play button pressed");
  };
  return (
    <View style={styles.container}>
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
            marginHorizontal: 20,
            alignContent: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "15%", // 20% of the parent container's width
              height: "35%", // 20% of the parent container's height
              borderRadius: 18,
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
            source={require("../../")}
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

      <View
        style={{
          flex: 0.5,
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
          Je m’appelle{" "}
          <Text
            style={{
              fontWeight: "800",
              fontSize: 14,
              lineHeight: 16.59,
              letterSpacing: 0.25,
              color: "#0B3038",
            }}
          >
            GnéyHally
          </Text>
          , je peux répondre à toutes tes questions concernant la santé sexuelle
          et réproductive.
        </Text>
      </View>
      <View
        style={{
          flex: 0.5,
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
          Tu peux commencer à discuter avec moi en tapant sur les sujets
          suggérés ou cliquer sur le{" "}
          <Text
            style={{
              fontWeight: "800",
              fontSize: 14,
              lineHeight: 16.59,
              letterSpacing: 0.25,
              color: "#0B3038",
            }}
          >
            bouton plus
          </Text>{" "}
          pour ouvrir un nouveau sujet de discussion.
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#93A19C", left: 40 }}>Sujets suggérés</Text>
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
      {/* <View style={{ flex: 1, backgroundColor: "lightgreen" }}></View> */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={handlePlayPress}
          style={{ position: "absolute", top: 50, left: 310 }}
        >
          <View style={styles.playButton}>
            <Entypo name="plus" size={35} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AiHomeFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    // alignItems: "center",
  },
  category: {
    height: "25%",
    width: "32%",
    backgroundColor: "#d7e0dd", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
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
});
