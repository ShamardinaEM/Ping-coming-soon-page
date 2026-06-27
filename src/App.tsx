import "./App.css";
import logo from "./assets/logo.svg";
import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";

import { useState } from "react";
function App() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setError("Email cannot be empty!");
            return;
        }
        if (!validateEmail(email)) {
            setError("Looks like it's not an email!");
            return;
        }
        setEmail('')
    };

    return (
        <>
            <header>
                <img src={logo} alt="logo" />
            </header>
            <main>
                <div className="block">
                    <h1>
                        We are launching <span>soon!</span>
                    </h1>
                    <p>Subscribe and get notified</p>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-block">
                            <input
                                type="text"
                                placeholder="Your email adress..."
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                value={email}
                                className={`email-input ${error ? "error-input" : ""}`}
                            />
                            <div className={`${error ? "error-text" : ""}`}>
                                {error}
                            </div>
                        </div>

                        <button className="submit-btn" type="submit">
                            Notify Me
                        </button>
                    </form>
                </div>
                <img
                    src="/illustration-dashboard.png"
                    alt="dashboard"
                    className="dashboard-img"
                />
                <div className="footer">
                    <div className="links">
                        <a className="link" href="#">
                            <span>
                                <img src={facebookIcon} alt="facebookIcon" />
                            </span>
                        </a>
                        <a className="link" href="#">
                            <span>
                                <img src={instagramIcon} alt="instagramIcon" />
                            </span>
                        </a>
                        <a className="link" href="#">
                            <span>
                                <img src={twitterIcon} alt="twitterIcon" />
                            </span>
                        </a>
                    </div>
                    &copy; Copyright Ping. All rights reserved.
                </div>
            </main>
            <footer className="attribution">
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    href="https://github.com/ShamardinaEM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ShamardinaEM
                </a>
                .
            </footer>
        </>
    );
}

export default App;
