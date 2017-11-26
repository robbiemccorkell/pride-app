import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ScreenEventList from './components/ScreenEventList';
import ScreenEventDetails from './components/ScreenEventDetails';
import ScreenEventMap from './components/ScreenEventMap';

const EventsScreenNavigator = TabNavigator({
  List: {
    screen: ScreenEventList,
    navigationOptions: {
      headerTitle: 'Events',
    },
  },
  Map: {
    screen: ScreenEventMap,
    navigationOptions: {
      headerTitle: 'Events',
    },
  }
});

const RootNavigator = StackNavigator({
  Home: {
    screen: EventsScreenNavigator,
  },
  Details: {
    screen: ScreenEventDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.event.title,
    })
  },
});

class App extends React.Component {
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
    const { upcomingEvents, pastEvents } = this.state;
    return (
      <RootNavigator screenProps={{upcomingEvents, pastEvents}} />
    );
  }
}

export default App;