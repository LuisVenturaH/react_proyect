import { useState } from "react"

export default function FlipCoin(){
    const [coin, setCoin] = useState('?')

    function handleCoin(){
        const result = Math.random() < 0.5 ? "¡¡Claro que si!!" : "Ni muert@"
        setCoin(result)
    }
  
    return(

        <>
        <h1>¿Te casas conmigo?</h1>
        <button onClick={handleCoin}>Click</button>
        <h2>{coin}</h2>
        </>
    )
}