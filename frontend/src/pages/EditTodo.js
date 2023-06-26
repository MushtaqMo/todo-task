import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"

const EditTodo = () => {
    const { id } = useParams();

    // This useState holds the todo to update
    const [todo, setTodo] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        const fetchTodo = async () => {
            const data = await getTodo(id)
            setTodo(data)
        }
        fetchTodo()
    },[])

    const onChangeText = (event) => {
        setUserInput(event.target.value)
    }

    const onUpdateTodo = async (e) => {
        e.preventDefault();
        
        const todoToUpdate = {
            ...todo,
            text: userInput
        }
        setTodo(todoToUpdate);
        await updateTodo(todoToUpdate)
        alert('edited item')
    }

    return (
        <div>
            <h1>Edit</h1>
            <h2>{todo.text}</h2>

            <form onSubmit={onUpdateTodo}>
            <input
            value={userInput}
            onChange={onChangeText}
            />
            <button type="submit" >Update Todo</button>
            </form>
     
        </div>
    )
}
export default EditTodo