import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import Parade1 from "./parade/Parade1";
import Parade2 from "./parade/Parade2";
import Parade3 from "./parade/Parade3";

// Screen components for your Tab Navigator
function Screen1() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "first-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            lineHeight: 19,
            letterSpacing: 0.005,
            marginLeft: 32,
            color: "#2D665F",
          }}
        >
          Découvre les sujets qui t’intéresse
        </Text>
      </View>
      <View style={{ flex: 0.9 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 16.59,
                letterSpacing: 0.25,
                marginLeft: 32,
                color: "#93A19C",
              }}
            >
              Contenus suggérés
            </Text>
          </View>
          <View style={{ flex: 0.9 }}>
            <Parade1 />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 16.59,
                letterSpacing: 0.25,
                marginLeft: 32,
                color: "#93A19C",
              }}
            >
              La santé sexuelle
            </Text>
          </View>
          <View style={{ flex: 0.9 }}>
            <Parade2 />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 16.59,
                letterSpacing: 0.25,
                marginLeft: 32,
                color: "#93A19C",
              }}
            >
              Les MST
            </Text>
          </View>
          <View style={{ flex: 0.9 }}>
            <Parade3 />
          </View>
        </View>
      </View>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen 2</Text>
    </View>
  );
}
function Screen3() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen 3</Text>
    </View>
  );
}

// Drawer content component
function CustomDrawerContent({ navigation }) {
  const onPress = () => {
    console.log("the button was pressed");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: 280,
        marginTop: 4 * 16,
        paddingHorizontal: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <TouchableOpacity
          style={{ width: "55%", height: "100%" }}
          onPress={() => navigation.closeDrawer()}
        >
          <Ionicons name="settings-outline" size={24} color="#2D665F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <FontAwesome name="close" size={24} color="#2D665F" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Text
          style={{
            fontSize: 28,
            lineHeight: 38, // Adjust as needed
            letterSpacing: 0.5, // Use letterSpacing to adjust letter spacing
            textAlign: "center",
            color: "#2D665F",
          }}
        >
          Themes
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            flex: 0.7,
            height: 50,
            width: 280,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#FFBE88",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              Santé sexuelle et reproductive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#47CACC",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              Sexualité responsable
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.7,
            height: 100,
            width: 280,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#CDB3D4",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              Droits et égalité des sexes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#93A19C",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              IST / VIH
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.7,
            height: 50,
            width: 280,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              Culture et traditions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: "80%",
              flex: 0.5,
              // top: 152,
              // left: 24,
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#E7B7C8",
              justifyContent: "center",
              alignItems: "center",
              // You can add more styles here if needed
            }}
            onPress={onPress}
          >
            <Image
              source={require("../../assets/images/cross.png")}
              style={{
                width: "30%",
                height: "30%",
                // top: 188,
                // left: 57,
                borderRadius: 2,
                // You can add more styles here if needed
              }}
            />
            <Text
              style={{
                fontSize: 13,
                lineHeight: 19,
                letterSpacing: 0.5,
                textAlign: "center",
                // You can add more text styles here if needed
              }}
            >
              Centres de santé et numéros utiles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Create a Drawer Navigator for the Drawer content
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* Add your screens here */}
    </Drawer.Navigator>
  );
}

// Create a Tab Navigator with a button to open the Drawer
const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
  const CustomTabBarIcon = (props) => {
    return (
      <Image
        source={require("../../../assets/images/discover.png")} // Replace with the path to your image
        style={{ width: 28, height: 28 }} // Adjust the width and height as needed
      />
    );
  };
  const CustomTabBarIcon2 = (props) => {
    return (
      <Image
        source={require("../../../assets/images/ask.png")} // Replace with the path to your image
        style={{ width: 28, height: 28 }} // Adjust the width and height as needed
      />
    );
  };
  const CustomTabBarIcon3 = (props) => {
    return (
      <Image
        source={require("../../../assets/images/talkabout.png")} // Replace with the path to your image
        style={{ width: "30%", height: "70%" }} // Adjust the width and height as needed
      />
    );
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#5E9F87", // Color for the active tab
        inactiveTintColor: "#93A19C", // Color for inactive tabs
        labelStyle: {
          fontSize: 13, // Adjust the font size as needed
        },
        style: {
          backgroundColor: "white", // Background color of the tab bar
          height: "80%", // Adjust the height as needed
        },
        tabStyle: {
          justifyContent: "center", // Center the tab content vertically
        },
      }}
    >
      <Tab.Screen
        name="Discover"
        component={Screen1}
        options={{
          tabBarLabel: "Découvrir",
          // tabBarIcon: ({ color, size }) => <CustomTabBarIcon />,
          tabBarIcon: () => (
            <FontAwesome name="square-o" size={28} color="#93A19C" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="demande-moi"
        component={Screen2}
        options={{
          tabBarLabel: "Demande-moi",
          // tabBarIcon: ({ color, size }) => <CustomTabBarIcon2 />,
          tabBarIcon: () => (
            <FontAwesome name="pencil-square-o" size={24} color="#93A19C" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Parlons en"
        component={Screen3}
        options={{
          tabBarLabel: "Parlons-en",
          // tabBarIcon: ({ color, size }) => <CustomTabBarIcon3 />,
          tabBarIcon: () => (
            <Feather name="user-check" size={24} color="#93A19C" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
// function CustomDrawerContent(props) {
//   return (
//     <View style={{ flex: 1, width: 300, backgroundColor: "white" }}>
//       {/* Add your custom drawer content here */}
//       <Text>Drawer Content</Text>
//     </View>
//   );
// }

// Create the top-level navigation structure
function App() {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => {
                // Handle the search icon press here
                // You can navigate to a search screen or open a search modal, for example.
              }}
            >
              <Feather name="search" size={28} color="#93A19C" />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

export default App;
