import React from 'react';
import { default as Nav } from './Nav';

interface HeaderProps {
    tabs: { text: string, ext: string }[];
}

export default function Header({ tabs }: HeaderProps) {
    return (
        <div className="header">
            <div>
                <h1 id="title">CEL - 01.23.21</h1>
            </div>
            <Nav tabs={tabs} />
        </div>
    );
};