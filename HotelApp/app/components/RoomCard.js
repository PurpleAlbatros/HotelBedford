import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

// Fix: Destructure 'room' from props object
export default function RoomCard({ room }) {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Room", { room: room });
  }

  return (
    <View style={styles.card}>
      <Pressable onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: room.image }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{room.name}</Text>
          <Text style={styles.bedType}>{room.bedType}</Text>
          <Text style={styles.price}>${room.price}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 72) / 2;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: 280,
    borderRadius: 12,
    overflow: "hidden",
    margin: 12,
    backgroundColor: "#fff",
  },

  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    borderRadius: 12,
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bedType: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: "green",
  },
});
