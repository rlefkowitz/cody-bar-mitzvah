import React from 'react';
import { Link } from 'react-router-dom';

interface TabProps {
    text: string;
    ext: string;
}

export default function Tab({ text, ext }: TabProps) {
    return (
        <div>
            <Link to={ext}>
                <p>{text}</p>
            </Link>
        </div>
    );
};