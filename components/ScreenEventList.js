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

export default class ScreenEvents extends React.Component {
  constructor() {
    super();

    this.state = { upcomingEvents: [], pastEvents: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://prideinlondon.org/events?format=json',
    );
    const json = await response.json();
    this.setState({ upcomingEvents: json.upcoming, pastEvents: json.past });
  }

  onPressEvent = event => {
    this.props.navigation.navigate('Details', { event });
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item: event }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.onPressEvent(event)}
            >
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
            { data: this.state.upcomingEvents, title: 'Upcoming Events' },
            { data: this.state.pastEvents, title: 'Past Events' },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
