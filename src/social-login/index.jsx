import React from 'react'
import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { auth, facebook, github, google, twitter } from '../config/firebase-config';

const SocialMediaLogin = () => {

    const googleSingIn = async (provider) => {
        try {
            const res = await signInWithPopup(auth, provider);
            console.log('res->', res)
        } catch (error) {
            console.log('Modal Closed Error')
        }
    }

    const facebookSingIn = async (provider) => {
        const res = await signInWithPopup(auth, provider);
        console.log('res->', res)
    }

    const xSignIn = async (provider) => {
        const res = await signInWithPopup(auth, provider);
        console.log('res->', res)
    }

    const githubSignIn = async (provider) => {
        const res = await signInWithPopup(auth, provider);
        console.log('res->', res)
    }

    const signInWithMicrosoft = async () => {
        const auth = getAuth();
        let microsoftProvider = new OAuthProvider('microsoft.com');
        try {
            const result = await signInWithPopup(auth, microsoftProvider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <h1>Hello world</h1>
            <button type='button' onClick={() => googleSingIn(google)}>goolge sing in</button> <br />
            <button type='button' onClick={() => facebookSingIn(facebook)}>Facebook</button> <br />
            <button type='button' onClick={() => xSignIn(twitter)}>Twitter sing in</button>
            <button type='button' onClick={() => githubSignIn(github)}>Github sing in</button>
            <button type='button' onClick={signInWithMicrosoft}>Microsoft</button>


        </div>
    );
}

export default SocialMediaLogin;
