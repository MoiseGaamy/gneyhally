import { View, Text } from "react-native";
import React from "react";
import ExpertComponent from "../../../components/expert/ExpertComponent";
import NewDiscussionModal from "../../../components/NewDiscussionModal";
import { TouchableOpacity } from "react-native-gesture-handler";

const Appointment = ({ navigation }) => {
  return (
    <View>
      <ExpertComponent
        texte="
        Docteur Keita est un expert en santé de la reproduction avec plus de 5 ans d'expérience. 
        Passionné par son domaine, il est dédié à fournir des conseils bien informés et à répondre à toutes vos interrogations concernant la santé sexuelle. 
        Actuellement en poste au prestigieux CHU Donka... Appointement
        "
      />
      <TouchableOpacity>

      </TouchableOpacity>
     
    </View>
  );
};

export default Appointment;
