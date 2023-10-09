import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../utils/Constantes";

const BtnAvailably = ({ bgColor, textColor, texte }) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: `${bgColor}`,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 20,
          color: `${textColor}`,
          justifyContent: "center",
        }}
      >
        {texte}
      </Text>
    </View>
  );
};

export default BtnAvailably;
