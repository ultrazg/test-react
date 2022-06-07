import React, {useEffect, useState} from 'react';
import {add} from 'g0blin-utils';

const Example = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `${count}`;
    }, [count]); // 只有当 count 发生改变，才会执行 useEffect

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={handleClick}>+</button>
            <button onClick={() => {
                console.log(add(15, 16));
            }}>g0blin-utils
            </button>
        </div>
    )
}

export default Example;