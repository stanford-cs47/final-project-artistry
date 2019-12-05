import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'


const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  UserProfile: {screen: UserProfileScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Home'
})


const BookmarkStack = createStackNavigator({
  Bookmarks: {screen: BookmarkScreen},
  BookmarkViewer: {screen: BookmarkViewerScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Bookmarks'
})

BookmarkStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="user"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Discover',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="compass"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  FeedScreen: { screen: HomeStack },
  BookmarkScreen:   { screen: BookmarkStack },
}, {
  // Default config for all screens
  initialRouteName: 'FeedScreen',
  tabBarOptions: {
    activeTintColor: '#B5CFAD',
    showLabel: true,
    activeBackgroundColor: '#172F1E',
    inactiveBackgroundColor: '#D7EAD2',
  },
})

const AppContainer = createAppContainer(TabNav);

export default AppContainer
