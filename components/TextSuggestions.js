import { View, Text } from "react-native";
import React from "react";
import aiHomeFirstStyles from "../styles/Style";

const TextSuggestions = () => {
  return (
    <View>
      <View
        style={{
          marginRight: "auto",
          marginLeft: 20,
          marginTop: 30,
          marginBottom: 12,
        }}
      >
        <Text style={aiHomeFirstStyles.textTitle}>Sujets suggérés </Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={aiHomeFirstStyles.aiTagsFormatTwo}>
          Calcule mes règles
        </Text>
        <Text style={aiHomeFirstStyles.aiTagsFormatOne}>Je suis enceinte</Text>
        <Text style={aiHomeFirstStyles.aiTagsFormatTwo}>L'abstinance</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 8 }}>
        <Text style={aiHomeFirstStyles.aiTagsFormatOne}>
          Trop jeune pour le mariage
        </Text>
        <Text style={aiHomeFirstStyles.aiTagsFormatTwo}>
          Je veux rester vierge
        </Text>
      </View>
    </View>
  );
};

export default TextSuggestions;
