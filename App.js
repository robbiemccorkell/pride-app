import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import ListEvent from './components/ListEvent';
import ListSectionHeader from './components/ListSectionHeader';

export default class App extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({ item: event }) => (
            <ListEvent event={event} />
          )}
          renderSectionHeader={({ section }) => <ListSectionHeader title={section.title} />}
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
    paddingTop: 20,
  },
});
