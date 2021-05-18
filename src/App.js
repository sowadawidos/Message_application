import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        })
        return unsubscribe;
    }, [])

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

    if (initializing) return "Loading...";

  return (
      <>
          <div className="page">
              <header className="app__header">
                  <div className="container">
                      <button className="hamburger">
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
                              {
                                  user ?
                                      <>
                                          <li className="nav-list-text">
                                              <Button onClick={signOut}>Sign Out</Button>
                                          </li>
                                          <li className="nav-list-text">
                                              <a href=""><img src={user.photoURL}/></a>
                                          </li>
                                      </>
                                      :
                                      <li className="nav-list-text">
                                          <Button onClick={signIn}>Sing In</Button>
                                      </li>
                              }
                          </ul>
                      </nav>
                  </div>
              </header>
              <MainPage user={user} messageDB={messageDB}/>
          </div>
      </>
  );
}
