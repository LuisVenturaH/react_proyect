import { useState, useEffect } from "react";

export default function ShowLetter() {
    const [letter, setLetter] = useState(null)

    useEffect(()=> {
        function handleKeyPress(e){
            setLetter(e.key)
        }
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [letter])

    return (
        <div>
            <h1>Tecla que has presionado</h1>
            <p>La tecla que has presionado es {letter}</p>
        </div>
    )
}

