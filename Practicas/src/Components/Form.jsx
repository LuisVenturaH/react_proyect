import { useState } from "react"

export default function Form(){
    const [form, setForm] = useState({
        name: 'Luis',
        lastname: 'Ventura',
        email: 'luis@mail.com',
    })

    return (
        <>
        <h1>Cambia los datos del formulario</h1>
        <label >Name:
        <input value={form.name} onChange={e=>{setForm({...form, name: e.target.value})}} style={{marginRight: '10px'}}/>
        </label>
        <label>Lastname:
        <input value={form.lastname} onChange={e=>{setForm({...form,lastname: e.target.value})}} style={{marginRight: '10px'}}/>    
        </label>
        <label>Email:
        <input value={form.email} onChange={e=>{setForm({...form, email: e.target.value})}} style={{marginRight: '10px'}}/>    
        </label>
        <p>{form.name}{' '}{form.lastname}{' '}{form.email}</p>
        </>

    )
}