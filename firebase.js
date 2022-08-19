import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBrlPTqp6vcROS4OxeYm2gKq-IxjvxO828',
    authDomain: 'test-instagram-clone-f6eb3.firebaseapp.com',
    projectId: 'test-instagram-clone-f6eb3',
    storageBucket: 'test-instagram-clone-f6eb3.appspot.com',
    messagingSenderId: '529407089277',
    appId: '1:529407089277:web:b70f774cc97037b41eaf14',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
