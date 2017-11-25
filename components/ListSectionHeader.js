import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListSectionHeader = ({title}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    height: 30,
    padding: 10,
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  sectionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ListSectionHeader;
