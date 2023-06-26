import { useState } from "react"
import { addTodo } from "../api/addTodo"

const AddTodo = () => {
    const [userInput, setUserInput] = useState("")
    
    // This functions reads the value from the input field and updates the text inside of the useState variable 
    const onChangeText = (event) => {
        setUserInput(event.target.value)
    }

    const onAddTodo = async (e) => {
        // Prevents the page from reloading/refreshing when submitting the form
        e.preventDefault();

        // Here we send the text of the todo to the backend to create a new todo
        const response = await addTodo({
            text: userInput
        })
        console.log(response)
    }

    return (
        <div>
            <h1>
                Add Todo
            </h1>
            <form onSubmit={onAddTodo}>
                <input 
                type="text"
                    value={userInput}
                    onChange={onChangeText}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo