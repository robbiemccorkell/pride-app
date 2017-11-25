import React from 'react';
import { StackNavigator } from 'react-navigation';
import ScreenEventList from './components/ScreenEventList';
import ScreenEventDetails from './components/ScreenEventDetails';

const RootNavigator = StackNavigator({
  Home: {
    screen: ScreenEventList,
    navigationOptions: {
      headerTitle: 'Events',
    },
  },
  Details: {
    screen: ScreenEventDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.event.title,
    })
  },
});

export default RootNavigator;