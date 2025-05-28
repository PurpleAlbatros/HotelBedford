import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import RegistrationButton from "../components/RegistrationButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AuthContext from "../logic/AuthContext";
import { getUsers } from "../api/Api";

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useFocusEffect(
    useCallback(() => {
      function fetchUsers() {
        getUsers().then((fetchedUsers) => {
          setUsers(fetchedUsers);
        });

        // / det er denne section du skal slette

        if (fetchedUsers) {
          console.log("usersArray", fetchedUsers);
          setUsers(fetchedUsers);
        } else {
          console.log("bruh");
          setUsers([]);
        }
      }
      fetchUsers();
    }, [])
  );

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("Login success:", user.name);
      Alert.alert("Login Successful", `Welcome, ${user.name}!`);
      setIsLoggedIn(true);
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Failed", "Please enter both email and password.");
      console.log("Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate("Forgot")}
      >
        <Text>you forgot your password?</Text>
      </TouchableOpacity>
      <RegistrationButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
  },
});
