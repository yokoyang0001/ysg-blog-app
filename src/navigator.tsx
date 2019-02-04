import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation"
import Home from "../src/containers/home"
import News from "../src/containers/news"
import Me from "../src/containers/me"
import Notifications from "../src/containers/notifications"
import LoginModal from "./containers/login"
import CameraScreen from "../src/components/camera"

const defaultNavigationOptions = ({ navigation }) => ({
  // eslint-disable-next-line
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state
    let iconName
    if (routeName === "Home") {
      iconName = "ios-home"
    } else if (routeName === "News") {
      iconName = "ios-paper"
    } else if (routeName === "Me") {
      iconName = "ios-person"
    } else if (routeName === "Notifications") {
      iconName = "ios-notifications"
    }
    return <Icon name={iconName} size={25} color={tintColor} />
  },
})

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: "ホーム",
      }),
    },
    News: {
      screen: News,
      navigationOptions: () => ({
        title: "ニュース",
      }),
    },
    Me: {
      screen: Me,
      navigationOptions: () => ({
        title: "マイページ",
      }),
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: () => ({
        title: "お知らせ",
      }),
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions,
    tabBarOptions: {
      activeTintColor: "#FF00FF",
      inactiveTintColor: "gray",
    },
  }
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Intro: {
      screen: LoginModal,
    },
    Login: {
      screen: LoginModal,
    },
    Register: {
      screen: LoginModal,
    },
    Camera: {
      screen: CameraScreen,
    },
  },
  {
    initialRouteName: "Intro",
    mode: "modal",
    headerMode: "none",
  }
)

export default createAppContainer(RootStack)
