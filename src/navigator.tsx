import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'
import Home from '../src/containers/home'
import News from '../src/containers/news'
import Me from '../src/containers/me'
import Notifications from '../src/containers/notifications'
import Intro from './containers/intro'
import CameraScreen from '../src/components/camera'

const defaultNavigationOptions = ({ navigation }) => ({
  // eslint-disable-next-line
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state
    let iconName
    if (routeName === 'Home') {
      iconName = 'ios-home'
    } else if (routeName === 'News') {
      iconName = 'ios-paper'
    } else if (routeName === 'Write') {
      iconName = 'ios-create'
    } else if (routeName === 'Me') {
      iconName = 'ios-person'
    } else if (routeName === 'Notifications') {
      iconName = 'ios-notifications'
    }
    return <Icon name={iconName} size={25} color={tintColor} />
  },
})

const mainStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'ホーム',
      }),
    },
    News: {
      screen: News,
      navigationOptions: () => ({
        title: 'ニュース',
      }),
    },
    Write: {
      screen: News,
      navigationOptions: () => ({
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate('WriteModal')
        },
      }),
    },
    Me: {
      screen: Me,
      navigationOptions: () => ({
        title: 'マイページ',
      }),
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: () => ({
        title: 'お知らせ',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions,
    tabBarOptions: {
      activeTintColor: '#FF00FF',
      inactiveTintColor: 'gray',
    },
  }
)

const rootStack = createStackNavigator(
  {
    Main: {
      screen: mainStack,
    },
    Intro: {
      screen: Intro,
    },
    WriteModal: {
      screen: News,
    },
    Camera: {
      screen: CameraScreen,
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(rootStack)
