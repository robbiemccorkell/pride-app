import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';

const ScreenEventMap = ({ navigation, screenProps }) => {
  const { upcomingEvents, pastEvents } = screenProps;
  const events = [
    ...upcomingEvents,
    ...pastEvents
  ];
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 51.5131768,
        longitude: -0.1399411,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {events.map(event => (
        <MapView.Marker
          key={event.id}
          coordinate={{
            latitude: event.location.mapLat,
            longitude: event.location.mapLng,
          }}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default ScreenEventMap;
