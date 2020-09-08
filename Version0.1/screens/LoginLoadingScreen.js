/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { f, auth, database } from '../config/config.js';

export default class LoginLoadingScreen extends Component {

  componentDidMount(){
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    f.auth().onAuthStateChanged(user => {
      if(user){
        console.log('Logged in', user);
        this.props.navigation.navigate('Profile')
      }
      else{
        console.log('Logged out');
        this.props.navigation.navigate('Login')

      }

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
