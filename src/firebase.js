import firebase from 'firebase'
/*var config = {
    apiKey: "AIzaSyDt70VA-Dnwi31Dz9-UedVPB-QBhdLjwjo",
    authDomain: "fakesite-223a4.firebaseapp.com",
    databaseURL: "https://fakesite-223a4.firebaseio.com",
    projectId: "fakesite-223a4",
    storageBucket: "fakesite-223a4.appspot.com",
    messagingSenderId: "690833786064"
};*/
const config = {
    apiKey: "AIzaSyD-4ZVt_gdDETjRamU6xlwQ_d5rQmEQ4EE",
    authDomain: "fake-website.firebaseapp.com",
    databaseURL: "https://fake-website.firebaseio.com",
    projectId: "fake-website",
    storageBucket: "fake-website.appspot.com",
    messagingSenderId: "47740335656"
 };
firebase.initializeApp(config);
export default firebase;
