import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import ListEvent from './ListEvent';
import ListSectionHeader from './ListSectionHeader';

const getOnPressEvent = navigation => event => {
  navigation.navigate('Details', { event });
};

const ScreenEvents = ({ screenProps, navigation }) => {
  const { upcomingEvents, pastEvents } = screenProps;
  const onPress = getOnPressEvent(navigation);

  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item: event }) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(event)}>
            <View>
              <ListEvent event={event} />
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <ListSectionHeader title={section.title} />
        )}
        keyExtractor={event => event.id}
        sections={[
          { data: upcomingEvents, title: 'Upcoming Events' },
          { data: pastEvents, title: 'Past Events' },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ScreenEvents;
