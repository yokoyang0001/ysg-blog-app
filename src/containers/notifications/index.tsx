import { createStackNavigator } from "react-navigation"
import HomeScreen from "./screen"

const HomeStack = createStackNavigator(
  {
    Notification: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: "Notification",
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default HomeStack
