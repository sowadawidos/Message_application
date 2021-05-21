import React, {useState, useEffect} from "react";
import './App.scss';
import 'firebase/auth';
import firebase from "firebase/app";
import 'firebase/firestore';
import {Button} from "./components/button/Button";
import "./App.scss";
import {MainPage} from "./components/main_page/MainPage";

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

    // const checkUser = users => {
    //     const test = users.some(user1 => {
    //         return user1.uid.includes(user.uid);
    //     })
    //     console.log(auth);
    // }

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
                    <div className="page">
                        <header className="app__header">
                            <div className="container">
                                <button onClick={toggleClass} className="hamburger">
                                    <span/>
                                    <span/>
                                    <span/>
                                </button>
                                <div className="logo">
                                    <h1 className="logo-title">
                                        <strong>Super</strong>
                                        <span>Message app</span>
                                    </h1>
                                </div>
                                <nav className="app__header-nav">
                                    <ul className="nav-list">
                                        <li className="nav-list-text">
                                            <Button onClick={signOut}>Sign Out</Button>
                                        </li>
                                        <li className="nav-list-text">
                                            <a href=""><img src={user.photoURL}/></a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <MainPage user={user} messageDB={messageDB} active={active}/>
                    </div>
                    :
                    <div className="page">
                        <header className="app__header">
                            <div className="container">
                                <div className="logo">
                                    <h1 className="logo-title">
                                        <strong>Super</strong>
                                        <span>Message app</span>
                                    </h1>
                                </div>
                                <nav className="app__header-nav">
                                    <ul className="nav-list">
                                        <li className="nav-list-text">
                                            <Button onClick={signIn}>Sign In</Button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <div className="main__page_signout">
                            <div className="main__page_signout-text">
                                <h1 className="logo-title">
                                    <strong>Super</strong>
                                    <span>Message app</span>
                                </h1>
                                <h1>Sign in to use application</h1>
                            </div>
                        </div>
                        <section>
                            <div className="wave wave1"/>
                            <div className="wave wave2"/>
                            <div className="wave wave3"/>
                            <div className="wave wave4"/>
                        </section>
                    </div>
            }
        </>
    );
}
