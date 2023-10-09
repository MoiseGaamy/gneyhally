import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, EvilIcons, FontAwesome } from "@expo/vector-icons";
import EditChatModal from "./EditChatModal";
import DeleteChatModal from "./DeleteChatModal";

const AIChat = () => {
  const [text, onChangeText] = React.useState("Commencer à écrire ici...");
  const windowWith = useWindowDimensions().height;
  const padding = windowWith;
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  const toggleDeleteModal = () => {
    setDeleteModalVisible(!deleteModalVisible);
  };
  const toggleEditModal = () => {
    setEditModalVisible(!editModalVisible);
  };

  return (
    <KeyboardAvoidingView
      behavior={`${padding}`}
      style={{ flex: 1, minHeight: windowWith, backgroundColor: "#F9F9F9" }}
    >
      <View style={styles.firstContainer}>
        <View style={{ flex: 0.5, marginHorizontal: 15 }}>
          {/* <View style={styles.arrowContainer}>
            <AntDesign name="arrowleft" size={24} color="#93A19C" />
          </View> */}
        </View>

        <View style={styles.parentContainer}>
          <TouchableOpacity
            style={styles.editContainer}
            onPress={toggleEditModal}
          >
            <FontAwesome name="edit" size={24} color="#93A19C" />
            <EditChatModal
              visible={editModalVisible}
              closeModal={toggleEditModal}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteContainer}
            onPress={toggleDeleteModal}
          >
            <AntDesign name="delete" size={24} color="#93A19C" />
            <DeleteChatModal
              visible={deleteModalVisible}
              closeModal={toggleDeleteModal}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={{ flexDirection: "row" }}>
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
          <View style={styles.chatBox}>
            <Text>Bonjour, je suis GnéyHally.</Text>
          </View>
        </View>
        <View style={styles.chatBox}>
          <Text>
            Parles-moi de tes préoccupations. La plupart des ados me posent des
            questions vraiment intéressantes.
          </Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <View style={styles.middleSecondChatBox}>
          <Text style={{ color: "#fff" }}>Je m’appelle Kadiatou.</Text>
        </View>
        <View style={styles.secondChatBox}>
          <Text style={{ color: "#fff" }}>
            Je viens d’avoir mes 14 ans mais mes parents veulent que je me marie
            maintenant. je ne sais pas quoi faire aider moi je t’en prie
          </Text>
        </View>
        <View style={styles.voiceNoteContainer}>
          <View
            style={{
              width: "12%",
              height: "43%",
              borderRadius: 15,
              //   backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvilIcons name="play" size={24} color="#93A19C" />
          </View>
          <View
            style={{
              width: "70%",
              height: "5%",
              backgroundColor: "#93A19C",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "40%",
                height: "4%",
                backgroundColor: "yellow",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
          <View>
            <Text style={{ fontSize: 8, color: "#93A19C" }}>00:23</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={{ flexDirection: "row" }}>
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
          <View style={{ flexDirection: "row" }}>
            <Entypo name="dot-single" size={24} color="#93A19C" />
            <Entypo name="dot-single" size={24} color="#93A19C" />
            <Entypo name="dot-single" size={24} color="#93A19C" />
          </View>
        </View>
      </View>
      <View style={styles.fithContainer}>
        <View
          style={{
            width: "90%",
            height: "25%",
            backgroundColor: "#baf5df",
            borderRadius: 20,
            alignSelf: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              marginLeft: 12,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Commencer à écrire ici..."
            keyboardType="default"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Entypo
              name="emoji-happy"
              size={24}
              color="#056e47"
              style={{ marginRight: 8 }}
            />
            <FontAwesome name="microphone" size={24} color="#056e47" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AIChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    // justifyContent: "center",
    // alignItems: "center",
  },
  firstContainer: {
    flex: ,
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  secondContainer: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  thirdContainer: {
    flex: 1,
    // backgroundColor: "gray",
  },
  fourthContainer: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  fithContainer: {
    flex: 1,
    // backgroundColor: "lightgreen",
    // justifyContent: "center",
  },
  arrowContainer: {
    // flex:0.5,
    width: "22%", // 50% width
    height: "25%", // 30% height
    borderRadius: 18, // Border radius in DP
    backgroundColor: "#fff",
    // marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  parentContainer: {
    flex: 0.5,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  editContainer: {
    width: "27%", // 50% width
    height: "27%", // 30% height
    borderRadius: 18, // Border radius in DP
    backgroundColor: "#fff",
    // marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteContainer: {
    width: "27%", // 50% width
    height: "27%", // 30% height
    borderRadius: 18, // Border radius in DP
    backgroundColor: "#fff",
    // marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  leafStyle: {
    // flex: 1,
    width: "10%", // 50% of the parent container's width
    aspectRatio: 1, // To maintain a 1:1 aspect ratio (square button)
    borderRadius: 80, // To make it circular
    backgroundColor: "#5E9F87",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
  },
  chatBox: {
    // flex: 0.8,
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
    padding: 10,
    margin: 10,
    // transform: [{ rotate: "-180deg" }],
  },
  secondChatBox: {
    width: "80%", // Width as a percentage of its parent container

    borderTopLeftRadius: 25, // Top-left corner radius in pixels
    borderTopRightRadius: 0, // Top-right corner radius in pixels
    borderBottomLeftRadius: 25, // Bottom-left corner radius in pixels
    borderBottomRightRadius: 25, // Bottom-right corner radius in pixels
    opacity: 0.6,
    backgroundColor: "#13573e",
    //   justifyContent: "center",
    // alignItems:'center',
    alignSelf: "center",
    padding: 7,
    // margin: 10,
    // transform: [{ rotate: "-180deg" }],
  },
  middleSecondChatBox: {
    width: "50%", // Width as a percentage of its parent container

    borderTopLeftRadius: 25, // Top-left corner radius in pixels
    borderTopRightRadius: 0, // Top-right corner radius in pixels
    borderBottomLeftRadius: 25, // Bottom-left corner radius in pixels
    borderBottomRightRadius: 25, // Bottom-right corner radius in pixels
    opacity: 0.6,
    backgroundColor: "#13573e",
    //   justifyContent: "center",
    // alignItems:'center',
    alignSelf: "flex-end",
    padding: 10,
    margin: 8,
  },
  voiceNoteContainer: {
    width: "50%", // Width as a percentage of its parent container

    borderTopLeftRadius: 25, // Top-left corner radius in pixels
    borderTopRightRadius: 0, // Top-right corner radius in pixels
    borderBottomLeftRadius: 25, // Bottom-left corner radius in pixels
    borderBottomRightRadius: 25, // Bottom-right corner radius in pixels
    opacity: 0.6,
    // backgroundColor: "#13573e",
    // borderRadius:2,
    borderWidth: 1,
    borderColor: "#93A19C",
    //   justifyContent: "center",
    // alignItems:'center',
    alignSelf: "flex-end",
    // padding: 10,
    margin: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
