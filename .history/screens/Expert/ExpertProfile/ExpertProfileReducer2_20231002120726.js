import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BtnAvailably from "../../../components/btn/BtnAvailably";
import { COLORS } from "../../../utils/Constantes";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import BtnBack from "../btn/BtnBack";
import BtnAvailably from "../btn/BtnAvailably";
import { COLORS } from "../../utils/Constantes";
import { DataExpertCom } from "../../Data";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ExpertProfileReducer2 = ({ navigation }) => {
  const onPress = () => navigation.navigate("appointment");
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 8,
      }}
    >
      <View
        style={{
          // flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {/* <BtnBack /> */}
        <BtnAvailably
          texte="Occupé"
          textColor={`${COLORS.white}`}
          bgColor={`${COLORS.red}`}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderRadius: 20,
          flexDirection: "row",
          maxWidth: "100%",
        }}
      >
        <Image
          source={require("../../../assets/images/nursesImg.png")}
          style={{
            width: 130,
            height: 130,
            borderRadius: 20,
            marginHorizontal: 10,
            backgroundColor: COLORS.red,
          }}
        />
        <View style={{ justifyContent: "center", width: "50%" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, color: COLORS.black }}
          >
            Ibrahima S. Kéita
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.gray,
              marginTop: 10,
            }}
          >
            Expert en santé de la reproduction
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons
              style={{
                padding: 10,
                backgroundColor: COLORS.lightGray,
                borderRadius: 10,
                marginRight: 5,
              }}
              name="map-marker"
              color={COLORS.gray}
              size={20}
            />
            <Text>Clinic Ambroise, Kaporo Centre Emetteur</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.lightGreen,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <MaterialCommunityIcons name="phone" color={COLORS.gray} size={40} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.yellow,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <MaterialCommunityIcons name="email" color="#FE9844" size={40} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.indigo,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <MaterialCommunityIcons name="map-marker" color="#CD73E5" size={40} />
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          A Propos
        </Text>
        <Text
          style={{
            paddingTop: 15,
            color: COLORS.gray,
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Tout afficher
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Docteur Keita est un expert en santé de la reproduction avec plus de 5
          ans d'expérience. Passionné par son domaine, il est dédié à fournir
          des conseils bien informés et à répondre à toutes vos interrogations
          concernant la santé sexuelle. Actuellement en poste au prestigieux CHU
          Donka...
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Disponibilité
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="calendar"
            color={COLORS.iconGreen}
            size={20}
          />
          <Text
            style={{
              color: COLORS.iconGreen,
              marginLeft: 10,
              fontWeight: 600,
              fontSize: 10,
            }}
          >
            Mer, 16 Août 2023
          </Text>
        </View>
      </View>
      <FlatList
        data={DataExpertCom}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          maxWidth: "100%",
          marginTop: 10,
        }}
        renderItem={({ item, index }) => {
          const backgroundColors = [
            `${COLORS.white}`,
            `${COLORS.white}`,
            `${COLORS.iconGreen}`,
            `${COLORS.white}`,
            `${COLORS.white}`,
            `${COLORS.white}`,
          ];
          const colors = [
            `${COLORS.gray}`,
            `${COLORS.gray}`,
            `${COLORS.white}`,
            `${COLORS.gray}`,
            `${COLORS.gray}`,
            `${COLORS.gray}`,
          ];
          const backgroundColor =
            backgroundColors[index % backgroundColors.length];
          const color = colors[index % colors.length];
          return (
            <View
              style={[
                {
                  backgroundColor: COLORS.white,
                  borderRadius: 15,
                  padding: 5,
                  width: 70,
                  height: 70,
                  alignItems: "center",
                  color: COLORS.gray,
                  marginHorizontal: 10,
                },
                { backgroundColor },
                { color },
              ]}
            >
              <Text style={[{ fontSize: 20 }, { color }]}>{item.num}</Text>
              <Text style={[{ fontSize: 15 }, { color }]}>{item.day}</Text>
            </View>
          );
        }}
      />
      <View
        style={{
          height: 17,
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 17,
          }}
        >
          Heures de Visites
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 26,
          paddingHorizontal: 40,
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 107,
            height: 26,
            borderRadius: 20,
            backgroundColor: COLORS.yellow,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            10:30 - 12:00
          </Text>
        </View>
        <View
          style={{
            width: 107,
            height: 26,
            borderRadius: 20,
            backgroundColor: COLORS.yellow,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
            }}
          >
            16:00 - 18:30
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            // height:55,
            backgroundColor: COLORS.iconGreen,
            borderRadius: 15,
            color: COLORS.white,
            marginTop: 10,
            paddingHorizontal: 100,
            paddingVertical: 10,
            justifyContent: "center",
          }}
        >
          Prendre rendez-vous
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpertProfileReducer2;

const styles = StyleSheet.create({});
