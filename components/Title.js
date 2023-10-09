import { View, Text } from "react-native";
import React from "react";
import aiHomeFirstStyles from "./../styles/Style";

const Title = ({ text }) => {
  return (
    <View>
      <Text style={aiHomeFirstStyles.title}>{text}</Text>
    </View>
  );
};

export default Title;
