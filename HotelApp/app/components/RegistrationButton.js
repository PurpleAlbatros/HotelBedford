import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationButton() {
  const navigation = useNavigation();

  const handleRegistrationPress = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleRegistrationPress}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "black",
    borderRadius: 30,
    alignItems: "center",
    borderColor: "white",
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
