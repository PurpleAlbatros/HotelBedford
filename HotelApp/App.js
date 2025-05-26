import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./app/pages/HomePage";
import NavBar from "./app/components/NavBar";
import LoginPage from "./app/pages/LoginPage";
import RegistrationPage from "./app/pages/RegistrationPage";
import RoomPage from "./app/pages/RoomPage";
import ForgotPasswordPage from "./app/pages/ForgotPasswordPage";
import { useState } from "react";
import AuthContext from "./app/logic/AuthContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator();

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Room"
            component={RoomPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot"
            component={ForgotPasswordPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </AuthContext.Provider>
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
