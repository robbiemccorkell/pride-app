import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import openMap from 'react-native-open-maps';

const EventDetails = ({ navigation }) => {
  const { event } = navigation.state.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: event.assetUrl }} />
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Been and gone</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.infoSection}>
          <View style={styles.locationSection}>
            <Text>{event.location.addressTitle}</Text>
            <TouchableOpacity
              onPress={() =>
                openMap({
                  latitude: event.location.mapLat,
                  longitude: event.location.mapLng,
                })
              }
            >
              <Text style={styles.locationSectionLink}>Get directions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  divider: {
    backgroundColor: 'purple',
    padding: 10,
  },
  dividerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  infoSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'lightgray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationSectionLink: {
    color: 'red',
  },
});

export default EventDetails;
