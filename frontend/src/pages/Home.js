import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await readTodos()
            setTodos(data.todos)
            console.log(data.todos, data.message)
        }
        fetchTodos()
    }, [])

    const onDeleteTodo = async (todo) => {
     await deleteTodo(todo)

     setTodos((todos) => {
        // Return a new array that filters out the todo that has been deleted 
        return todos.filter((currentTodo) => currentTodo._id !== todo._id)
     })
    }

    if (!todos) return <h1>loading...</h1>

    return (
        <div>
            <>
                {
                    todos ? todos.map((todo) => <Card key={todo._id} deleteHandler={() => onDeleteTodo(todo)} todo={todo}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Home