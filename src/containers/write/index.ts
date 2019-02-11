import { createStackNavigator } from 'react-navigation'
import EditScreen from './screen'
import SiteSettingScreen from './screen/setting'
import PreviewScreen from './screen/preview'

const homeStack = createStackNavigator(
  {
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        header: null,
      },
    },
    SiteSetting: {
      screen: SiteSettingScreen,
      navigationOptions: {
        header: null,
      },
    },
    Preview: {
      screen: PreviewScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'List',
    // transitionConfig: () => ({
    //   screenInterpolator: (sceneProps) => {
    //     const transition = StackViewStyleInterpolator.forHorizontal(sceneProps);
    //     return transition;
    //   },
    // }),
  }
)

export default homeStack
