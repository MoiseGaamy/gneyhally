import { View, Text } from "react-native";
import React from "react";
import aiHomeFirstStyles from "../styles/Style";

const TextBox = ({ firstText, secondTextExit, secondText }) => {
  return (
    <View style={aiHomeFirstStyles.aiBoxContainer}>
      <View style={aiHomeFirstStyles.aiBox}>
        <Text style={{ fontWeight: "bold" }}>Bienvenue!</Text>
        <Text>{firstText}</Text>
      </View>
      {secondTextExit === "true" ? (
        <Text style={aiHomeFirstStyles.aiBox}>{secondText}</Text>
      ) : null}
    </View>
  );
};

export default TextBox;
