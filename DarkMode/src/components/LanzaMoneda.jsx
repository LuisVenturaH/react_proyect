import { useState } from "react"

   export default function LanzaMoneda(){
    const [coin, setCoin] = useState(null)

    function lanzaMoneda() {
        const result = Math.random() < 0.5 ? 'cara' : 'cruz'
        setCoin(result)
    }

    return(
        <div>
            <h1>Prueba tu suerte al lanzar la modena</h1>
            <button onClick={lanzaMoneda}>Lanza la moneda</button>
            {coin && <p>Resultado: {coin}</p>}
        </div>
    )
    
}
