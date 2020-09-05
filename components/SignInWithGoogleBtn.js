/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { f, auth, database } from '../config/config.js';
import { signInWithGoogle } from '../components/SignInWithGoogleBtn.js'



const IOS_CLIENT_ID =
  "237710538511-nq4dcjqjbubv3akv9qf2tgd0g3aovjcb.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "237710538511-vjddvhob3pa9ms3p3ksntoe96nomog32.apps.googleusercontent.com";

export default class SignInWithGoogleBtn extends Component {


  /*  signInWithGoogle = async () => {
      try {
        const result = await Google.logInAsync({
          iosClientId: IOS_CLIENT_ID,
          androidClientId: ANDROID_CLIENT_ID,
          scopes: ["profile", "email"]
        });

        if (result.type === "success") {
          console.log("LoginScreen.js.js 21 | ", result.user.givenName);
          this.props.navigation.navigate("Profile", {
            username: result.user.givenName
          }); //after Google login redirect to Profile
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        console.log('LoginScreen.js.js 30 | Error with login', e);
        return { error: true };
      }
    };
*/




  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.google}>
          {" "}
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'http://pngimg.com/uploads/google/google_PNG19630.png',
              }}
              />


            {"      "}Sign In With Google{"      "}</Text>
        </View>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: -4,
      },
      shadowOpacity: 0.35,
      shadowRadius: 2.00,

      elevation: 4,
      fontFamily: "Roboto",

  /*  shadowColor: "black",
    shadowRadius: 2.0,
    shadowOffset: {
	     width: 0,
	     height: -4,
      },
    shadowOpacity: 0.35, */


  },

  tinyLogo: {
  width: 25,
  height: 25,

  },

  google: {
    paddingBottom: 5,
    color: '#8d8d8d'

  },


});
