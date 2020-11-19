import React from 'react';
import { LogItem } from '../atoms/LogItem'

export const Log = ({ logItems }) => (
    <ul>
        {logItems.map((logItem, index) => (
            <LogItem key={index}>{logItem}</LogItem>
        ))}
    </ul>
);