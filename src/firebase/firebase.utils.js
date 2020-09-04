import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnJ2xYyWFgwJOl4u_U76BvOG9bzXiWreE",
    authDomain: "crwn-db-a2e44.firebaseapp.com",
    databaseURL: "https://crwn-db-a2e44.firebaseio.com",
    projectId: "crwn-db-a2e44",
    storageBucket: "crwn-db-a2e44.appspot.com",
    messagingSenderId: "755772019723",
    appId: "1:755772019723:web:03a9fd72e1f35ddf87e30e"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user');
            console.log(err);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;