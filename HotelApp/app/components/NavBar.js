import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useContext } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../logic/AuthContext";

export default function NavBar() {
  const navigation = useNavigation();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleNavigation = (option) => {
    navigation.navigate(option);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
    Alert.alert("Logged out successful", "You been logged out lil bro!!! ");
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.navigation}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => handleNavigation("Home")}
      >
        <Icon name="home" />
        <Text style={styles.navButtonText}>Home Page</Text>
      </TouchableOpacity>

      {isLoggedIn && (
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleLogOut()}
        >
          <Icon name="logout" />
          <Text style={styles.navButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
      {!isLoggedIn && (
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation("Login")}
        >
          <Icon name="login" />
          <Text style={styles.navButtonText}>Login</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
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
