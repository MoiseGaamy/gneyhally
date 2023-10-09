import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AppRegistry } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/splashScreen/SplashScreen";
import Splash1 from "./screens/splashSwiper/SplashSwiper";
import SignupOption1 from "./screens/signupOption1/SignupOption1";
import SignupOption2 from "./screens/signupOption2/SignupOption2";
import SignupOption3 from "./screens/signupOption3/SignupOption3";
import SignupOption4 from "./screens/signupOption4/signupOption4";
import Welcome from "./screens/welcome/Welcome";
import Connection from "./screens/connection/Connection";
import Home from "./screens/home/Home";
import { name as appName } from "./app.json";
import MenuThemeSelected from "./screens/menuThemeSelected/MenuThemeSelected";

AppRegistry.registerComponent(appName, () => App);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            title: "Splash",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash1"
          component={Splash1}
          options={{
            title: "Splash1",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignupOption1"
          component={SignupOption1}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#2D665F", height: 0 },
          }}
        />
        <Stack.Screen
          name="SignupOption2"
          component={SignupOption2}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#2D665F", height: 0 },
          }}
        />
        <Stack.Screen
          name="SignupOption3"
          component={SignupOption3}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#2D665F", height: 0 },
          }}
        />
        <Stack.Screen
          name="SignupOption4"
          component={SignupOption4}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#2D665F", height: 0 },
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Connection"
          component={Connection}
          options={{
            title: "Connection",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuThemeSelected"
          component={MenuThemeSelected}
          options={{
            title: "",
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="MenuThemeSelected"
          component={MenuThemeSelected}
          options={{
            title: "",
            headerShown: true,
          }}
        />
          <Stack.Screen
          name="MenuThemeSelected"
          component={MenuThemeSelected}
          options={{
            title: "",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
