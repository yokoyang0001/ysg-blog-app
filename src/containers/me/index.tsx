import { createStackNavigator } from "react-navigation"
import HomeScreen from "./screen"

const HomeStack = createStackNavigator(
  {
    Intro: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "Intro",
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default HomeStack
