import React, {useState} from 'react'

const Example = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>当前几把：{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default Example