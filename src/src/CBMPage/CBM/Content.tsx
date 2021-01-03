import React from 'react';
import {
    Home, Invitation, Montage, Livestream, MitzvahProject
} from './Subpages';
import { Switch, Route } from 'react-router-dom';

export default function Content() {
    return (
        <div className="content">
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/invitation">
                    <Invitation />
                </Route>
                <Route path="/montage">
                    <Montage />
                </Route>
                <Route path="/livestream">
                    <Livestream />
                </Route>
                <Route path="/mitzvah-project">
                    <MitzvahProject />
                </Route>
            </Switch>
        </div>
    );
};