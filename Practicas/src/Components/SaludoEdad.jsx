import { useState } from "react";

export default function SaludoEdad() {
    const [name, setName] = useState('Luis')
    const [age, setAge] = useState(40)

    // function handleName(e){
    //     setName(e.target.value)
    // }
    
    function handleAgePlus(){
        setAge(age + 1)
    }
    function handleAgeMinus(){
        setAge(age - 1)
    }

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={handleAgePlus}>Incrementa tu edad</button>
            <button onClick={handleAgeMinus}>Decrementa tu edad</button>
            <h2>Hola {name} tu edad incrementada es {age}</h2>

        </>
    )
}