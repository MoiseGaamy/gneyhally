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
import ThemeOpened from "./screens/themeOpened/ThemeOpened";
import ArticleOpened from "./screens/articleOpened/ArticleOpened";
import ActionAuthentication from "./screens/actionAuthentification/ActionAuthentification";
import VideoOpenedScreen from "./screens/videoOpenedScreen/VideoOpenedScreen";
import VideoOpened from "./screens/videoOpened/VideoOpened";
import AiHome2 from "./screens/aiHomeSecond/AiHomeSecond";
import AiHomeNewDiscussion from "./screens/aiHomeNewDiscussion/AiHomeNewDiscussion";
import AIChat from "./screens/aiChat/Aichat";
import HomeExpertsAuthentification from "./screens/homeExpertsAuthentification/HomeExpertsAuthentification";
import SayIn from "./screens/Expert/ExpertHome/Sayin";
import ExpertProfile from "./screens/Expert/ExpertProfile/ExpertProfile";
import ExpertProfileReducer from "./screens/Expert/ExpertProfile/ExpertProfileReducer";
import Appointment from "./screens/Expert/ExpertProfile/Appointment";
import AppointmentConfirmation from "./screens/Expert/ExpertProfile/AppointmentConfirmation";

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
          name="ThemeOpened"
          component={ThemeOpened}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ArticleOpened"
          component={ArticleOpened}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ActionAuthentication"
          component={ActionAuthentication}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="VideoOpenedScreen"
          component={VideoOpenedScreen}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="VideoOpened"
          component={VideoOpened}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="AiHomeSecond"
          component={AiHome2}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="NewDiscussion"
          component={AiHomeNewDiscussion}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="AiChat"
          component={AIChat}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="HomeExpertAuth"
          component={HomeExpertsAuthentification}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="expertHomepage"
          component={SayIn}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="expertProfile"
          component={ExpertProfile}
          options={{
            title: "",
            headerShown: true,
          }}
        />
         <Stack.Screen
          name="expertProfile"
          component={ExpertProfile}
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
