import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import React from "react";

export default function RoomPage({ route }) {
  const { room } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={room.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{room.name}</Text>
        <Text style={styles.bedType}>{room.bedType}</Text>
        <Text style={styles.price}>${room.price}</Text>
        <Icon name="event" type="material" />
        <Button
          title="book now"
          buttonStyle={{
            backgroundColor: "green",
            borderWidth: 2,
            borderColor: "indigo",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 225,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            fontWeight: "bold",
            color: "white",
          }}
        />
        <Text style={styles.sectionTitle}>Bathroom</Text>
        <Text style={styles.detail}>{room.bathroom}</Text>
        <Text style={styles.sectionTitle}>Optional Features</Text>
        {room.optionalFeatures?.length > 0 ? (
          room.optionalFeatures.map((feature, index) => (
            <Text key={index} style={styles.detail}>
              • {feature}
            </Text>
          ))
        ) : (
          <Text style={styles.detail}>None</Text>
        )}
        <Text style={styles.sectionTitle}>Amenities</Text>
        <Text style={styles.subSection}>Climate Control</Text>
        <Text style={styles.detail}>{room.amenities.climateControl}</Text>
        <Text style={styles.subSection}>Electronics</Text>
        {room.amenities.electronics.map((item, index) => (
          <Text key={index} style={styles.detail}>
            • {item}
          </Text>
        ))}
        <Text style={styles.subSection}>Lighting</Text>
        <Text style={styles.detail}>{room.amenities.lighting}</Text>
        <Text style={styles.subSection}>Workspace </Text>
        <Text style={styles.detail}>{room.amenities.workspace}</Text>
        <Text style={styles.subSection}>Communication </Text>
        {room.amenities.communication.map((item, index) => (
          <Text key={index} style={styles.detail}>
            • {item}
          </Text>
        ))}
        <Text style={styles.subSection}>Personal Care</Text>
        {room.amenities.personalCare.map((item, index) => (
          <Text key={index} style={styles.detail}>
            • {item}
          </Text>
        ))}
        <Text style={styles.subSection}>Other</Text>
        {room.amenities.other.map((item, index) => (
          <Text key={index} style={styles.detail}>
            • {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bedType: {
    fontSize: 18,
    color: "#555",
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "green",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  subSection: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
  },
});
