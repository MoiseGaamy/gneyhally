import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const ArticleOpened = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.4, paddingTop: 5 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFBE88",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("../../assets/images/last2.png")}
            style={{
              width: "100%",
              height: "100%",
              // top: 188,
              // left: 57,
              //   borderRadius: 2,
              // You can add more styles here if needed
            }}
          />
        </View>
        {/* <View style={styles.roundedIcon}>
          <Ionicons name="ios-arrow-back" size={30} color="#93A19C" />
        </View> */}
        <View
          style={{
            flex: 1,
            // paddingVertical: 10,
            width: "109%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            position: "absolute",
            top: 180,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 18.96,
              justifyContent: "center",
              letterSpacing: 0.005, // To represent 0.5% letter spacing
              textAlign: "center",
              alignItems: "center",
              color: "#2D665F",
            }}
          >
            Comment préserver sa virginité ?
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="hearto" size={20} color="#93A19C" />
              <Text style={{ marginHorizontal: 8, color: "#93A19C" }}>24</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="sharealt" size={20} color="#93A19C" />
              <Text style={{ marginHorizontal: 8, color: "#93A19C" }}>24</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View style={{ justifyContent: "flex-start", marginHorizontal: 8 }}>
              <Text style={{ color: "#93A19C", fontSize: 10 }}>PDF</Text>
              <Feather name="download" size={20} color="#93A19C" />
            </View>

            <Text
              style={{
                textAlign: "center",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 14.22,
                letterSpacing: 0.0025,
                color: "#93A19C",
              }}
            >
              Télécharger en PDF
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 18,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 18.96,
              letterSpacing: 0.005,
              color: "#2D665F",
            }}
          >
            Tags:
          </Text>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Sex</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Grossesse</Text>
          </View>
          <View style={styles.category}>
            <Text style={{ color: "#5E9F87" }}>Abstinance</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 0.4 }}>
        <Text
          style={{
            fontWeight: "700", // Bold
            fontSize: 24,
            lineHeight: 28.44,
            textAlign: "center",
            color: "#2D665F",
          }}
        >
          Title 1
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 18.96,
            letterSpacing: 0.005,
            textAlign: "center",
            color: "#93A19C",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mauris tristique nulla in ut
          amet quis tellus est. Commodo phasellus scelerisque sit et sit nisl.
          Sit mauris suspendisse ac egestas nunc lectus amet. Dolor donec
          vestibulum vestibulum aliquet ut at purus. Lorem ipsum dolor sit amet
          consectetur. Mauris tristique nulla in ut amet quis tellus est.
          Commodo phasellus scelerisque sit et sit nisl. Sit mauris suspendisse
          ac egestas nunc lectus amet. Dolor donec vestibulum vestibulum aliquet
          ut at purus.
        </Text>
        <Text
          style={{
            fontWeight: "700", // Bold
            fontSize: 24,
            lineHeight: 28.44,
            textAlign: "center",
            color: "#2D665F",
          }}
        >
          Subtitle 1
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 18.96,
            letterSpacing: 0.005,
            textAlign: "center",
            color: "#93A19C",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mauris tristique nulla in ut
          amet quis tellus est. Commodo phasellus scelerisque sit et sit nisl.
          Sit mauris suspendisse ac egestas nunc lectus amet. Dolor donec
          vestibulum vestibulum aliquet ut at purus.
        </Text>
        <Text
          style={{
            fontWeight: "700", // Bold
            fontSize: 24,
            lineHeight: 28.44,
            textAlign: "center",
            color: "#2D665F",
          }}
        >
          Title 2
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 18.96,
            letterSpacing: 0.005,
            textAlign: "center",
            color: "#93A19C",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mauris tristique nulla in ut
          amet quis tellus est. Commodo phasellus scelerisque sit et sit nisl.
          Sit mauris suspendisse ac egestas nunc lectus amet. Dolor donec
          vestibulum vestibulum aliquet ut at purus.
        </Text>
        <Text
          style={{
            fontWeight: "700", // Bold
            fontSize: 24,
            lineHeight: 28.44,
            textAlign: "center",
            color: "#2D665F",
          }}
        >
          Title 3
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 18.96,
            letterSpacing: 0.005,
            textAlign: "center",
            color: "#93A19C",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mauris tristique nulla in ut
          amet quis tellus est. Commodo phasellus scelerisque sit et sit nisl.
          Sit mauris suspendisse ac egestas nunc lectus amet. Dolor donec
          vestibulum vestibulum aliquet ut at purus. Lorem ipsum dolor sit amet
          consectetur. Mauris tristique nulla in ut amet quis tellus est.
          Commodo phasellus scelerisque sit et sit nisl. Sit mauris suspendisse
          ac egestas nunc lectus amet. Dolor donec vestibulum vestibulum aliquet
          ut at purus.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ArticleOpened;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  roundedIcon: {
    flex: 1,
    height: "15%",
    width: "15%",
    backgroundColor: "white", // Background color of the rounded view
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 20,
    top: 50,
    // Set borderRadius to half of the icon size to make it circula // Add padding to create space around the icon
  },
  category: {
    height: "50%",
    width: "25%",
    // color: "#5E9F87", // Background color of the rounded view
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    backgroundColor: "#D1EBE1",
  },
});
