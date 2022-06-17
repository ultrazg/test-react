import React, {useEffect, useState} from 'react';

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
        </div>
    )
}

export default Example;