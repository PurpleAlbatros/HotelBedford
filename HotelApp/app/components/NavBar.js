import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();

  const handleNavigation = (option) => {
    navigation.navigate(option);
  };

  return (
    <SafeAreaView style={styles.navigation}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => handleNavigation("Home")}
      >
        <Text style={styles.navButtonText}>Home Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => handleNavigation("Login")}
      >
        <Text style={styles.navButtonText}>Reservations</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: "",
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.05)",
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    minWidth: 130,
    alignItems: "center",
  },
  navButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
});
