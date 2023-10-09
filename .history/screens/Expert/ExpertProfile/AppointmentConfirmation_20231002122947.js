import { View, Text } from "react-native";
import React from "react";
import ExpertComponent from "../../../components/expert/ExpertComponent";
import NewDiscussionModal from "../../../components/NewDiscussionModal";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppointmentConfirmation = ({ navigation }) => {
  const onPress = () => console.log("this is just for test you know");
  return (
    <View>
      <ExpertComponent
        texte="
        Docteur Keita est un expert en santé de la reproduction avec plus de 5 ans d'expérience. 
        Passionné par son domaine, il est dédié à fournir des conseils bien informés et à répondre à toutes vos interrogations concernant la santé sexuelle. 
        Actuellement en poste au prestigieux CHU Donka... 
        "
      />
      <TouchableOpacity onPress={}>
        <NewDiscussionModal
          titleModal="Prendre rendez-vous"
          isInput="true"
          textPlaceholder="Visite medical"
          isCalendar="true"
          calendarPlaceholder="Mer, 16 Août 2023    10:30"
          navigation={navigation}
          // where="appointment"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentConfirmation;
