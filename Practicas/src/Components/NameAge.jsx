import { useState} from "react"

export default function NameAge(){
    const [name, setName] = useState("Luis")
    const [age, setAge] = useState(30)

    function handleAgeUp(){
        setAge(age + 1)
    }
    function handleAgeDown(){
        setAge(age - 1)
    }
    function handleName(e){
        setName(e.target.value)
    }

    return (
        <>
        <h1>Incrementa tu edad</h1>
        <input value={name} onChange={handleName}  style={{marginRight: '10px'}}/>
        <button onClick={handleAgeUp} style={{marginRight: '10px'}}>+ edad</button>
        <button onClick={handleAgeDown}>- edad</button>
        <p>Hola {name}, tu edad es {age}</p>
        </>
    )
}