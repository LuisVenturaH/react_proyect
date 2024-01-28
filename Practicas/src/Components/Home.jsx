import React from "react";
import { useState ,useEffect } from "react";

export default function Home() {

    const [clicked, setClicked] = useState(false)
    

    useEffect(() => {
        console.log("Primer clic ejecutado")
    },[clicked])

    useEffect(() => {
        console.log("Segundo clic ejecutado")
    },[clicked])





    return (
        <p onClick={() => setClicked(state => !state)}>Haz clic {JSON.stringify(clicked)}</p>
    )
}