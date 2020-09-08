import firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyDpwka-QgYHzHgXZS8JqoirkS3Te3OlFnE",
  authDomain: "myinstagram-9cda4.firebaseapp.com",
  databaseURL: "https://myinstagram-9cda4.firebaseio.com",
  projectId: "myinstagram-9cda4",
  storageBucket: "myinstagram-9cda4.appspot.com",
  messagingSenderId: "1098036322331",
  appId: "1:1098036322331:web:f2f0d3d32d44ee0789d8be",
  measurementId: "G-YE98H7TD3K"
};

firebase.initializeApp(config)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
