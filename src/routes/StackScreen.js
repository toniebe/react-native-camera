import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../screens/Camera';
import Review from '../screens/Review';

const Stack = createNativeStackNavigator();

export class StackScreen extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    );
  }
}


