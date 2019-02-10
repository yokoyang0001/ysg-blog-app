import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screen'

const homeStack = createStackNavigator(
  {
    MyPage: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'MyPage',
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default homeStack
