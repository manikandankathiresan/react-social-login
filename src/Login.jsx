import { OAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    auth,
    facebook,
    github,
    google,
    microsoft,
    twitter,
} from "./config/firebase-config";

const Login = () => {
    const navigate = useNavigate();
    const googleSingIn = async (provider) => {
        try {
            const res = await signInWithPopup(auth, provider);
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("accessToken", res.user.accessToken);
            sessionStorage.setItem("name", res.user.displayName);
            sessionStorage.setItem("email", res.user.email);
            sessionStorage.setItem("photoURL", res.user.photoURL);
            sessionStorage.setItem("provider", res.providerId);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const facebookSingIn = async (provider) => {
        try {
            const res = await signInWithPopup(auth, provider);
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("accessToken", res.user.accessToken);
            sessionStorage.setItem("name", res.user.displayName);
            sessionStorage.setItem("email", res.user.email);
            sessionStorage.setItem("photoURL", res.user.photoURL);
            sessionStorage.setItem("provider", res.providerId);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const xSignIn = async (provider) => {
        try {
            const res = await signInWithPopup(auth, provider);
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("accessToken", res.user.accessToken);
            sessionStorage.setItem("name", res.user.displayName);
            sessionStorage.setItem("email", res.user.email);
            sessionStorage.setItem("photoURL", res.user.photoURL);
            sessionStorage.setItem("provider", res.providerId);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const githubSignIn = async (provider) => {
        try {
            const res = await signInWithPopup(auth, provider);
            sessionStorage.setItem("isAuth", true);
            sessionStorage.setItem("accessToken", res.user.accessToken);
            sessionStorage.setItem("name", res.user.displayName);
            sessionStorage.setItem("email", res.user.email);
            sessionStorage.setItem("photoURL", res.user.photoURL);
            sessionStorage.setItem("provider", res.providerId);

            // sessionStorage.setItem('loginResponse', { ...res });
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithMicrosoft = async () => {
        const auth = getAuth();
        let microsoftProvider = new OAuthProvider("microsoft.com");
        try {
            const result = await signInWithPopup(auth, microsoftProvider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="content__title">
                {" "}
                <h2>React Social Login</h2>{" "}
            </div>
            <div className="title">
                <div>
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                        alt="logo"
                        style={{ height: "100px" }}
                    />
                </div>{" "}
                &nbsp;&nbsp; <h1>+</h1>
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/21279195?s=280&v=4"
                        alt="logo"
                        style={{ height: "100px" }}
                    />
                </div>{" "}
                &nbsp;&nbsp;<h1>+</h1>
                <div>
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/firebase-2.svg"
                        alt="logo"
                        style={{ height: "100px" }}
                    />
                </div>
            </div>
            <div className="container">
                <div
                    data-text="Google"
                    style={{ "--r": -15 }}
                    className="glass"
                    onClick={() => googleSingIn(google)}
                >
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg"
                        alt="gmail"
                        height={70}
                    />
                </div>
                <div
                    data-text="Microsoft"
                    style={{ "--r": 15 }}
                    className="glass"
                    onClick={() => signInWithMicrosoft(microsoft)}
                >
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg"
                        alt="gmail"
                        height={70}
                    />
                </div>
                <div
                    data-text="Meta"
                    style={{ "--r": -15 }}
                    className="glass"
                    onClick={() => facebookSingIn(facebook)}
                >
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/meta-1.svg"
                        alt="gmail"
                        height={70}
                    />
                </div>
                <div
                    data-text="X"
                    style={{ "--r": 15 }}
                    className="glass"
                    onClick={() => xSignIn(twitter)}
                >
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg"
                        alt="gmail"
                        height={70}
                    />
                </div>
                <div
                    data-text="github"
                    style={{ "--r": -15 }}
                    className="glass"
                    onClick={() => githubSignIn(github)}
                >
                    <img
                        src="data:image/png;base64,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"
                        alt="gmail"
                        height={70}
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
