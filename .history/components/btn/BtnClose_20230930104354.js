import { View, Text } from "react-native";
import React from "react";
import aiHomeFirstStyles from "../../styles/Style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BtnClose = () => {
  return (
    <View style={aiHomeFirstStyles.materialIcons}>
      <MaterialCommunityIcons
        name="close"
        color={aiHomeFirstStyles.materialIcons.color}
        size={aiHomeFirstStyles.materialIcons.width}
      />
    </View>
  );
};

export default BtnClose;
