import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListEvent = ({event}) => (
  <View style={styles.event}>
    <Image style={styles.image} source={{ uri: event.assetUrl }} />
    <View style={styles.heading}>
      <Text style={styles.title}>{event.title}</Text>
      <Text>{event.location.addressTitle}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  event: {
    flex: 1
  },
  heading: {
    height: 60,
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ListEvent;