import React, { useState } from 'react';
import { Button, Count } from '../atoms';
import { Log } from '../molecules';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [logItems, setLog] = useState([]);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        logItems.push(`Increment to: ${newCount}`)
        setLog(logItems);
    }

    const decrementCount = () => {
        const newCount = count - 1;
        setCount(newCount);
        logItems.push(`Decrement to: ${newCount}`)
        setLog(logItems);
    }

    const resetCount = () => {
        setCount(0);
        logItems.push(`Reset Count: 0`)
        setLog(logItems);
    }

    const resetLog = () => {
        setLog([]);
    }

    return (
        <>
            <Count>{count}</Count>
            <div>
                <Button onClick={incrementCount}>+</Button>
                <Button onClick={decrementCount}>-</Button>
                <Button onClick={resetCount}>reset count</Button>
                <Button onClick={resetLog}>reset log</Button>
            </div>
            <Log logItems={logItems} />
        </>
    )
}