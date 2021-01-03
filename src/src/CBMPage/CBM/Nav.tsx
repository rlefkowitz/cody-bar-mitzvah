import React from 'react';
import { default as Tab } from './Tab';

interface NavProps {
    tabs: { text: string, ext: string }[];
}

export default function Nav({ tabs }: NavProps) {
    return (
        <div className = "nav">
            {tabs.map(({ text, ext }, _) => (
                <Tab text={text} ext={ext} />
            ))}
        </div>
    );
};