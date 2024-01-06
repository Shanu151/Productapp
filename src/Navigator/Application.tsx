import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from '../Pages/Homepage';

const Stack = createNativeStackNavigator();

const Application = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Application;

const styles = StyleSheet.create({});
