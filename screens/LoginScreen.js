import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, Image, TextInput } from 'react-native';
import { f, auth, database } from '../config/config.js';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';





export default class LoginScreen extends React.Component {


  /*constructor(props)
  {
    super(props);


    //this.registerUser('testemail@gmail.com', 'fakepassword');

    //Signnout function
    /*auth.signOut()
    .then(() =>{
      console.log('Logged Out...');
    }).catch((error) =>{
      console.log('Error: ', error);
    });

    //Check if login
    f.auth().onAuthStateChanged(function(user){
      if(user){
        console.log('Logged in', user);
      }
      else{
        console.log('Logged out');

      }

    });


  }*/


 signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        iosClientId: '1098036322331-h7k5dq09kcvg7e1migmbqooik9blnd7b.apps.googleusercontent.com',
        androidClientId: '1098036322331-uoj3iv3oa0vphjekmo3br6mm775n9tpe.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result.user.givenName);
        this.props.navigation.navigate('Profile', {
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


/*async  loginWithFacebook (){

  const login=async ()=>{

  await Facebook.initializeAsync('331224444923263');

  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        { permissions:['public_profile', 'email'] },
      );
  }

  /*if(type ==='success'){
    const credentials = f.auth.FacebookAuthProvider.credential(token);
    f.auth().signInWithCredential(credential).catch((error) => {
      console.log('Error...', error);
    })
  }
}*/


/*async loginWithFacebook (){

    try {
      await Facebook.initializeAsync('<APP_ID>');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }

}*/




  registerUser = (email, password) => {

    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(email, password, user))
    .catch((error) => console.log('error logging in', error));


  }


  render() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo}
        source={require('../images/i_pro.png')}
      />
      <TouchableHighlight onPress={this.signInWithGoogle}>
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



      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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



  logo: {
  width: 280,
  height: 70,

  },

  google: {
    paddingBottom: 5,
    color: '#8d8d8d'

  },





});
