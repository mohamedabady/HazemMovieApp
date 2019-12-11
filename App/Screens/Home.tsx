import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
    static navigationOptions = ({ navigation }: any) => {
        return {
            header: null,
        }
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
