//import screens
import HomeScreen from '../HomeScreens/HomeScreen';
import DataList from '../HomeScreens/DataList';
import CharacterScreen from '../HomeScreens/CharacterDetails';
import ComicScreen from '../HomeScreens/ComicsDetails';
import SeriesScreen from '../HomeScreens/SeriesDetails';
import StoryScreen from '../HomeScreens/StoryDetails';

//Import Components
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = {
    HomeScreen: {
        screen: HomeScreen
    },
    DataList:{
        screen: DataList
    },
    CharacterScreen: {
        screen: CharacterScreen
    },
    ComicScreen: {
        screen: ComicScreen
    },
    SeriesScreen: {
        screen: SeriesScreen
    },
    StoryScreen: {
        screen: StoryScreen
    }
}

export default createStackNavigator(HomeStack);