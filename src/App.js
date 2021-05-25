import React, {useState, useEffect} from "react";
import './App.scss';
import 'firebase/auth';
import firebase from "firebase/app";
import 'firebase/firestore';
import "./App.scss";
import {MainPage} from "./components/main_page/MainPage";
import {HeaderMain} from "./components/header/HeaderMain";
import {HeaderStartPage} from "./components/header/HeaderStartPage";
import {MainStartPage} from "./components/main_page/MainStartPage";

firebase.initializeApp({
    apiKey: "AIzaSyDiGHuehmVjeTB08DcTVueINPfnZ6atwTQ",
    authDomain: "message-appk.firebaseapp.com",
    projectId: "message-appk",
    storageBucket: "message-appk.appspot.com",
    messagingSenderId: "1088403228949",
    appId: "1:1088403228949:web:df373df2e84773f654c11c"
});

const auth = firebase.auth();
const messageDB = firebase.firestore();

export const App = () => {
    const [user, setUser] = useState(() => auth.currentUser)
    const [initializing, setInitializing] = useState(true);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);

                const {uid, displayName, photoURL} = user;

                messageDB.collection('users').doc(`${uid}`).set({
                    name: displayName,
                    photo: photoURL,
                    uid: uid
                })

            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        })

        return unsubscribe;
    }, [initializing])

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const signIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();

        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    }

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error.message);
        }
    }

    const toggleClass = event => {
        event.preventDefault();
        setActive(!active);

    }

    if (initializing) return "Loading...";

    return (
        <>
            {
                user ?
                    <div className={ prefersDarkScheme.matches ? "page dark-theme" : "page"}>
                        <HeaderMain toggleClass={toggleClass} user={user} active={active} signOut={signOut}/>
                        <MainPage user={user} messageDB={messageDB} active={active}/>
                    </div>
                    :
                    <div className={ prefersDarkScheme.matches ? "page dark-theme" : "page"}>
                        <HeaderStartPage signIn={signIn}/>
                        <MainStartPage/>
                    </div>
            }
        </>
    );
}
