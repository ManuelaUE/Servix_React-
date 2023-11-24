/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { View, Text } from 'react-native'

const Stack = createNativeStackNavigator()  

import Home from '../screens/home'

const mainStack = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    />

                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default mainStack