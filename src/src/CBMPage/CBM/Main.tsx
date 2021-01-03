import { homedir } from 'os';
import React from 'react';
import { default as Header } from './Header';
import { default as Content } from './Content';
import { BrowserRouter as Router } from 'react-router-dom';

const tabs = [
    { text: "Home", ext: "/" },
    { text: "Invitation", ext: "/invitation" },
    { text: "Montage", ext: "/montage" }, 
    { text: "Livestream", ext: "/livestream" }, 
    { text: "Mitzvah Project", ext: "/mitzvah-project" }
]

export default function Main() {
    return (
        <Router>
            <div className="root">
                <Header tabs={tabs} />
                <Content />
            </div>
        </Router>
    );
};