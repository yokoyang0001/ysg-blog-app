import { createStackNavigator } from "react-navigation"
import HomeScreen from "./screen"

const HomeStack = createStackNavigator(
  {
    List: {
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
    initialRouteName: "List",
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default HomeStack
