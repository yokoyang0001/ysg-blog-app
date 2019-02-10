import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screen'

const homeStack = createStackNavigator(
  {
    Top: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Top',
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default homeStack
