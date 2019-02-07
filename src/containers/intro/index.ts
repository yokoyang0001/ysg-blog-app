import { createStackNavigator } from "react-navigation"
import IntroScreen from "./screen/intro"
import LoginScreen from "./screen/login"
import RegisterScreen from "./screen/register"

const HomeStack = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
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
