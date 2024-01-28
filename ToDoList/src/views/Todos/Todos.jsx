import { useState } from "react"
import Form from "../../Components/Form/Form"
import List from "../../Components/List/List"
import {todolist} from '../../api/todolist.js'
import './Todos.css'
import DarkLight from "../../Components/DarkLight/DarkLight.jsx"

export default function Todos() {
    const [todos, setTodos] = useState(todolist)
    const [newTodoTitle, setNewTodoTitle] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            title: newTodoTitle,
            completed: false
        }
        setTodos((currentTodos) => [newTodo,...currentTodos] )
        setNewTodoTitle("")
    }

    return(
    <>
        <h1>Todos los view</h1>
        <DarkLight/>
        <Form
        onSubmit={handleSubmit}
        setState={setNewTodoTitle}
        state={newTodoTitle}
        />
        <List items={todos} setState={setTodos}/>
    </>
    )
}