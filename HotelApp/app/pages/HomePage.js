import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Room</Text>

      <FlatList
        data={Object.values(rooms)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <RoomCard room={item} />}
        scrollEnabled={true}
        style={styles.flatList}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  flatList: {
    flex: 1,
  },
  row: {
    justifyContent: "space-between",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "grey",
    backgroundColor: "#F8F8F8",
  },
  bottomButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    minWidth: 130,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "blue",
    fontSize: 14,
    fontWeight: "600",
  },
});
