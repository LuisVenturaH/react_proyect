import { useState } from "react"

export default function MyCheckBox() {
    const [check, setCheck] = useState(true)

    function handleCheck(e) {
        setCheck(e.target.checked)
    }
    return (
        <>
            <label>
                <input type="checkbox" checked={check} onChange={handleCheck}/>
                Lo apruebo!!!!
            </label>
            <p>{check ? 'Lo' : 'No lo'} apruebo!!!</p>
        </>

    )
}