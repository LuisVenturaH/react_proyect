import { useState } from "react"

export default function TwoAges(){
    const [age, setAge] = useState(20)

    function handleAgePlusOne(){
        setAge(age + 1)
    }
    function handleAgePlusThree(){
        setAge(age + 3)
    }

    return (    
    <>
        <h1>Suma 1 o 3 al número</h1>
        <button onClick={handleAgePlusOne} style={{marginRight:"10px"}}>+ 1</button>
        <button onClick={handleAgePlusThree}  style={{marginRight:"10px"}}>+ 3</button>
        <p>El nuevo número es {age}</p>
    </>
    )
}