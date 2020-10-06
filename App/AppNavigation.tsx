import React from 'react';
import { Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

//Import Tabs
import HomeStack from './Screens/TabStacks/HomeStack';
import SearchStack from './Screens/TabStacks/SearchStack';
import FavouritesStack from './Screens/TabStacks/FavouritesStack';

//Import Switch Screens
import Splash from './Screens/Splash';

//Import Utilities
import { Colors } from './config/constants'

const TabBarComponent = props => <BottomTabBar {...props} />;

const TabNavigatorConfig = {
    tabBarComponent: (props) =>
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#000', '#000']}
            style={{
                height: 80,
                width: Dimensions.get('window').width,
                alignItems: 'center',
                paddingBottom: 14
            }}>
            <TabBarComponent {...props} style={{ borderTopColor: 'red', borderTopWidth: 2, width: Dimensions.get('window').width, backgroundColor: 'transparent' }} />
        </LinearGradient>,
    tabBarOptions: {
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.redOpacity,
        labelPosition: 'below-icon',
        style: {
            backgroundColor: 'black',
            alignItems: 'center',
        },
        tabStyle: {
            height: 50
        },
        labelStyle: {
            textTransform: 'uppercase',
            fontWeight: '600',
            fontSize: 12
        }
    }
}

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: () => {
            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => <Image style={{ width: 25, height: 25, tintColor: tintColor }} source={require('./Assets/HomeIcon.png')} />
            }
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: () => {
            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => <Image style={{ width: 20, height: 20, tintColor: tintColor }} source={require('./Assets/SearchIcon.png')} />
            }
        }
    },
    Favourites: {
        screen: FavouritesStack,
        navigationOptions: () => {
            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => <Image style={{ width: 20, height: 20, tintColor: tintColor }} source={require('./Assets/FavouriteIcon.png')} />
            }
        }
    }
}, TabNavigatorConfig)

const SwitchNavigator = createSwitchNavigator({
    Splash: {
        screen: Splash
    },
    TabNavigator: {
        screen: TabNavigator
    }
})

export default createAppContainer(SwitchNavigator);