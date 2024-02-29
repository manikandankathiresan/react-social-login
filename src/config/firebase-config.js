// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider } from 'firebase/auth'

import { config } from './helper';
console.log('confi', config)
const { API_ID, API_KEY, PROJECT_ID, SOTRAGE_BUCKET, MESSAGING_SENDER_ID, AUTH_DOMAIN } = config;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: SOTRAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: API_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const twitter = new TwitterAuthProvider();
export const github = new GithubAuthProvider();
export const microsoft = new OAuthProvider("microsoft.com");




