import { createStackNavigator } from 'react-navigation';
import NotificationsScreen from '../screens/NotificationsScreen';
import sharedRoutes, { sharedOptions } from './sharedRoutes';

const NotificationsRoute = createStackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        headerTitle: 'Notifications',
        headerLeft: null,
      },
    },
    ...sharedRoutes,
  },
  {
    ...sharedOptions,
  }
);

export default NotificationsRoute;
