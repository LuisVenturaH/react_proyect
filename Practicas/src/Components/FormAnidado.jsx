import { useState } from "react"

export default function FormAnidado(){
    const [person, setPerson] = useState({
        name: 'El Robe',
        artwork: {
            title: 'Contra Todos',
            year: '2018', 
            image: 'https://i.ytimg.com/vi/0jG_BTf-o0Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHbk4YqDznD5I4mXz5euLP6PdqRw' 
        }
    })
    function handlePerson(e){
        setPerson({
            ...person,
            name: e.target.value
        })
    }
    function handleTitle(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }
    function handleYear(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                year: e.target.value
            }
        })
    }
    function handleImage(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }
    return(
        <>
        <h1>Cambia datos de tu artista</h1>
        <label style={{marginRight: '10px'}}>
            Artista:
            <input 
            value={person.name} onChange={handlePerson}/>
        </label>
        <label style={{marginRight: '10px'}}>
            Canción:
            <input 
            value={person.artwork.title} onChange={handleTitle}/>
        </label>
        <label style={{marginRight: '10px'}}>
            Año:
            <input 
            value={person.artwork.year} onChange={handleYear}/>
        </label>
        <label style={{marginRight: '10px'}}>
            Imagen:
            <input 
            value={person.artwork.image} onChange={handleImage}/>
        </label>
        <p>
            <i>{person.artwork.title}</i>
            {' por '}
            {person.name}
            <br />
            (publicado en el año {person.artwork.year})
        </p>
        <img style={{width: '500px'}}
        src={person.artwork.image}
        alt={person.artwork.title}/>
        </>

    )


}