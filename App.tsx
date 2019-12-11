import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screen Import
import Splash from './App/Screens/Splash';
import Home from './App/Screens/Home';
import MovieDetails from './App/Screens/MovieDetails';

const StackRouteConfig = {
  Home:{
    screen: Home
  },
  MovieDetails:{
    screen: MovieDetails
  }
}

const AppStack = createStackNavigator(StackRouteConfig);

const SwitchRouteConfig = {
  Splash:{
    screen: Splash
  },
  AppStack:{
    screen: AppStack
  }
}
const AppContainer = createAppContainer(createSwitchNavigator(SwitchRouteConfig))
export default AppContainer