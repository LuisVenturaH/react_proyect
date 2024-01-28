import { useState, useEffect } from "react"
import { dataToHour } from "../assets/Utils/dataToHour"

export default function Clock() {
    const [hour, setHour] = useState(new Date())

    useEffect(() => {
        function updateTime() {
            setHour(new Date())
        }
        const intervalId = setInterval(updateTime, 100)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

        return (
            <div>
                <h1>Hora actualizada</h1>
                <h2>La hora actual es: {dataToHour(hour)}</h2>
            </div>
        )
}