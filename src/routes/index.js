import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackScreen } from './StackScreen';


export class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <StackScreen />
            </NavigationContainer>
        )
    }
}

export default Routes
