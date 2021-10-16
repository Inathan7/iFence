import MenuScreen from './pages/MenuScreen';
import RegisterBraceletScreen from './pages/RegisterBraceletScreen';

import {createAppContainer, createStackNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Menu: MenuScreen,
    Bracelet: RegisterBraceletScreen,
  }),
);

export default Routes;
