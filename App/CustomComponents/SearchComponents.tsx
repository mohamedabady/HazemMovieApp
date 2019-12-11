import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface IState{
    query: string;
}

export default class SearchComponents extends Component<IState> {
    constructor(props: any){
        super(props);
        this.state={
            query:null
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
