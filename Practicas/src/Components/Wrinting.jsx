import { useState } from "react"

export default function Writing() {

    const styles = {
        color: 'yellow'
    }
    
    const [writing, setWriting] = useState(" ")
        function handleWriting(e) {
            setWriting(e.target.value)
        }

    return(
        <>  
            <h1>Escribe para agregar texto</h1>
            <input value={writing} onChange={handleWriting}/>
            <p style={styles}>Has escrito: {writing}</p>
            <button onClick={() => setWriting("Texto cambiado")}>Limpiar</button>
        </>
    )
}