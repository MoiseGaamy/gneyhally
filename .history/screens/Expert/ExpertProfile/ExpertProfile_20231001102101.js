import { View, Text } from "react-native";
import React from "react";
import aiHomeFirstStyles from "./../../../styles/Style";
import { COLORS } from "../../../utils/Constantes";
import ExpertComponent from "../../../components/expert/ExpertComponent";

const ExpertProfile = ({ navigation }) => {
  return (
    <View>
      <ExpertComponent
        texte="
          Docteur Keita est un expert en santé de la reproduction avec plus de 5 ans d'expérience. 
          Passionné par son domaine, il est dédié à fournir des conseils bien informés et à répondre à toutes vos interrogations concernant la santé sexuelle. 
          Actuellement en poste au prestigieux CHU Donka, l'un des meilleurs hôpitaux du pays, il apporte son expertise reconnue pour vous accompagner vers une meilleure compréhension de votre bien-être. 
          Son engagement envers la santé et le bien-être de la jeunesse fait de lui un atout.
        "
        navigation={navigation}
        // where='expertProfileReducer'
      />
    </View>
  );
};

export default ExpertProfile;
