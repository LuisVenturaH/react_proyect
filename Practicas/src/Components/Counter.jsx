import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(1)

    function handleClick() {
        setCount(count * 2)
    }

    return (
        <button onClick={handleClick}>Click y aumento en {count}</button>

    )
}