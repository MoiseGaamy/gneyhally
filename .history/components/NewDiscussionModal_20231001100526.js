import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../utils/Constantes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BtnMix from "./BtnMix";

// Show Modal

const NewDiscussionModal = ({
  titleModal,
  isInput,
  textPlaceholder,
  boxSelectText,
  calendarPlaceholder,
  isCalendar,
  navigation,
  where,
}) => {
  const onPress = () => navigation.navigate(`${where}`);
  return (
    <Modal transparent={true} visible={true}>
      <View style={{ flex: 1, height: 40, backgroundColor: "#000000aa" }}>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            margin: 40,
            padding: 40,
            position: "relative",
            top: "20%",
            height:""
          }}
        >
          <Text
            style={{
              color: COLORS.textGreen,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {titleModal}
          </Text>
          {isInput === "true" ? (
            <>
              <TextInput
                placeholder={textPlaceholder}
                style={{
                  borderWidth: 2,
                  borderColor: COLORS.gray,
                  color: COLORS.gray,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  marginTop: 30,
                }}
              />
              <Text
                style={{
                  fontStyle: "italic",
                  ontSize: 8,
                  marginVertical: 10,
                  color: COLORS.gray,
                }}
              >
                Pas plus de 20 caractères
              </Text>
            </>
          ) : (
            <>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  color: COLORS.gray,
                  borderRadius: 10,
                }}
              >
                {" "}
                {boxSelectText}
                <MaterialCommunityIcons
                  name="menu-down"
                  color="#000000"
                  size={20}
                />
              </Text>
              <Text
                style={{
                  fontFamily: "italic",
                  fontSize: 10,
                  marginVertical: 10,
                }}
              >
                Pas plus de 20 caractères
              </Text>
            </>
          )}
          {isCalendar === "true" ? (
            <Text
              style={{
                borderWidth: 1,
                borderBlockColor: COLORS.gray,
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: COLORS.gray,
              }}
            >
              <MaterialCommunityIcons
                name="calendar-month"
                color="#FFFFFF"
                size={20}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: COLORS.white }}>{calendarPlaceholder}</Text>
            </Text>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            {/* <BtnMix btnText="Annuler" bgColor={COLORS.lightGray} /> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#2D665F",
                width: "40%",
                height: "50%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
              onPress={onPress}
            >
              {/* <BtnMix
                btnText="Confirmer"
                bgColor={COLORS.iconGreen}
                textColor={COLORS.white}
              /> */}
              <Text style={{ color: "white", textAlign: "center" }}>
                Annuler
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#2D665F",
                width: "40%",
                height: "50%",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
              onPress={onPress}
            >
              {/* <BtnMix
                btnText="Confirmer"
                bgColor={COLORS.iconGreen}
                textColor={COLORS.white}
              /> */}
              <Text style={{ color: "white", textAlign: "center" }}>
                Confirmer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewDiscussionModal;
