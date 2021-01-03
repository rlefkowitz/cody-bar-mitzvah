import React from 'react';
import { default as Tab } from './Tab';

interface NavProps {
    tabs: { text: string, ext: string }[];
}

const Nav = ({ tabs }: NavProps) => {
    return (
        <div className = "nav">
            {tabs.map(({ text, ext }, _) => (
                <Tab text={text} ext={ext} />
            ))}
        </div>
    );
};

export default Nav;