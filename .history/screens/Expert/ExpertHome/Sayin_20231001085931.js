import { View, Text, TextInput, Image, FlatList } from "react-native";
import React from "react";
import aiHomeFirstStyles from "./../../../styles/Style";
import BtnBack from "../../../components/btn/BtnBack";
import Title from "../../../components/Title";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../../utils/Constantes";
import { DataExpertHome } from "../../../Data";

const SayIn = () => {
  const DataExpertHome = [
    {
      id: 1,
      picture: "../../../assets/images/binta.png",
      name: "Hadja Binta Diallo",
      role: "Experte en santé de la reproduction",
      localWorkName: "CHU Donka",
      availability: "Disponible",
    },
    {
      id: 2,
      picture: "../../../assets/images/ibrahim.png",
      name: "Ibrahima S. Kéita",
      role: "Expert en santé de la reproduction",
      localWorkName: "Clinic Ambroise",
      availability: "Occupé",
    },
    {
      id: 3,
      picture: "../../../",
      name: "Emmanuel Haba",
      role: "Expert en santé de la reproduction",
      localWorkName: "St Gabriel de Koloma",
      availability: "Disponible",
    },
    {
      id: 4,
      name: "Emmanuel Haba",
      picture: "./assets/images/binta.png",
      role: "Expert en santé de la reproduction",
      localWorkName: "St Gabriel de Koloma",
      availability: "Disponible",
    },
  ];
  
  return (
    <View style={{ marginTop: 35, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <BtnBack />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title text="Parlons en" />
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          ...aiHomeFirstStyles.searchInput,
        }}
      >
        <MaterialCommunityIcons
          name="magnify"
          color={COLORS.iconGreen}
          size={30}
        />
        <TextInput
          placeholder="Rechercher un expert"
          style={{ paddingHorizontal: 70, alignContent: "center" }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderRadius: 20,
          height: 130,
          backgroundColor: "#47CACC",
          flexDirection: "row",
          maxWidth: "100%",
        }}
      >
        <Image
          source={require("../../../assets/images/nursesImg.png")}
          style={{ width: 120, height: 120 }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: "50%",
          }}
        >
          <Text
            style={{ color: COLORS.white, fontSize: 16, fontWeight: "bold" }}
          >
            Des réponses à toutes tes questions sur la santé sexuelle.{" "}
          </Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            color={COLORS.white}
            size={30}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "100%",
          marginTop: 30,
        }}
      >
        <View>
          <Text
            style={{
              color: COLORS.gray,
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Nos experts
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: COLORS.gray,
            }}
          >
            Tout
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              marginLeft: 6,
            }}
          >
            disponible
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              marginLeft: 6,
            }}
          >
            Occupé
          </Text>
        </View>
      </View>
      <FlatList
        data={DataExpertHome}
        keyExtractor={(item) => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={aiHomeFirstStyles.ScrollList}
        renderItem={({ item, index }) => {
          const backgroundColors = [
            `${COLORS.blue}`,
            `${COLORS.red}`,
            `${COLORS.blue}`,
          ];
          const backgroundColor =
            backgroundColors[index % backgroundColors.length];
          return (
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 20,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Image
                source={item.picture}
                alt="doctor"
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: "45%",
                }}
              >
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    color: COLORS.gray,
                  }}
                >
                  {item.role}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                  }}
                >
                  {item.localWorkName}
                </Text>
              </View>
              <View
                style={[
                  aiHomeFirstStyles.scrollVerticalList,
                  { backgroundColor },
                ]}
              >
                <Text
                  style={{ color: COLORS.white, fontSize: 12, fontWeight: 500 }}
                >
                  {item.availability}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SayIn;
