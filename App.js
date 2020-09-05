// Screens
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginLoadingScreen from './screens/LoginLoadingScreen';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, Image, TextInput } from 'react-native';
//React Navigation Setup
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';

const MainNavigator = createSwitchNavigator({
  Loading:{screen: LoginLoadingScreen},
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

const AppNavigator = createAppContainer(MainNavigator);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
  },
});
