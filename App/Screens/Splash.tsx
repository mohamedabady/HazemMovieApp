import React, {useEffect} from 'react';
import { View, Text,  StyleSheet, Image } from 'react-native';
import { SplashText, AppDeveloper, Colors } from '../config/constants';

const Splash = props => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('TabNavigator')
        }, 2500)
    }, [])
    return (
        <View style={Styles.mainContainer}>
            <Image resizeMode='contain' style={{ width: 400, height: 400 }} source={require('../Assets/SplashMarvel.gif')} />
            <Text style={Styles.splashText}>{SplashText}</Text>
            <Text style={Styles.appDeveloper}>{AppDeveloper}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.blackBackground
    },
    splashText:{
        color: Colors.white,
        fontSize:14,
        fontWeight:'500',
        textAlign:'center'
    },
    appDeveloper:{
        color:Colors.white,
        fontSize:10,
        position:'absolute',
        bottom:20,
    }
})

export default Splash;