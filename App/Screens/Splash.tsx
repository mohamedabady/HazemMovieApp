import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Splash extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('AppStack')
        }, 3000);
    }
    render() {
        return (
            <View style={Styles.mainContainer}>
                <Image style={Styles.imageStyle} source={require('../../assets/splash.png')}/>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    imageStyle:{
        width: 150,
        height: 150
    }
})
