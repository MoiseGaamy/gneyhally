import { View, Text } from "react-native";
import React from "react";
import ExpertComponent2 from "../../../components/expert/ExpertComponent2";

const ExpertProfileReducer = ({ navigation }) => {
  return (
    <View>
      <ExpertComponent2
        texte="
            Docteur Keita est un expert en santé de la reproduction avec plus de 5 ans d'expérience. 
            Passionné par son domaine, il est dédié à fournir des conseils bien informés et à répondre à toutes vos interrogations concernant la santé sexuelle. 
            Actuellement en poste au prestigieux CHU Donka... 
            
        "
        moreText="Tout afficher"
        navigation={navigation}
        where=""
      />
    </View>
  );
};

export default ExpertProfileReducer;
