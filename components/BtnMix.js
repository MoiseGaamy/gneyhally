import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../utils/Constantes";

const BtnMix = ({ btnText, bgColor, textColor }) => {
  return (
    <View
      style={{
        backgroundColor: `${bgColor}`,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 100,
      }}
    >
      <Text style={{ color: `${textColor}` }}>{btnText}</Text>
    </View>
  );
};

export default BtnMix;
