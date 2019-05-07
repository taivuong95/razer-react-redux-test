import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBvfSf0Bzt5dReedsEwWhDob5JAPRR4Ci4',
  authDomain: 'razer-redux-test.firebaseapp.com',
  databaseURL: 'https://razer-redux-test.firebaseio.com',
  projectId: 'razer-redux-test',
  storageBucket: 'razer-redux-test.appspot.com',
  messagingSenderId: '1091660939418',
  appId: '1:1091660939418:web:afb2a6d4cf46cfa8',
};
// Initialize Firebase

export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('data/');
data.once('value').then(function(snapshot) {
  console.log(snapshot.val());
});

export const addDataToFireBase = newData => {
  // var connectData = firebase.database().ref('data');
  // connectData.push(newData);

  firebase
    .database()
    .ref('data/')
    .set(newData);
};
