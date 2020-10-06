import React from 'react'
import { View, Text, Alert } from 'react-native'

const ErrorHandler = (error) => {
    if (error) {
        Alert.alert('Error',error);
        return
    }
    Alert.alert('Error', `couldn't complete request !!!`)
}

export default ErrorHandler
