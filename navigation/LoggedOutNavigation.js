import { createStackNavigator } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';

const LoggedOutNavigation = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
  },
});

export default LoggedOutNavigation;
