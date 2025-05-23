import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'

const Stack = createStackNavigator()


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})