import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../config/constants'

type loaderProps = {
    isLoading: boolean
}
const LoadingIndicator = (props: loaderProps) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator
                animating={props.isLoading}
                color={Colors.red}
                size='large' />
        </View>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    loaderContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowOpacity: 0.7,
        shadowColor: Colors.whiteOpacity,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 3,
        position: 'absolute',
        left: (windowWidth / 2) - 50,
        top: (windowHeight / 2) - 50
    }
})

export default LoadingIndicator;