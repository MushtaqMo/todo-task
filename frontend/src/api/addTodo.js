const API_URL = `http://localhost:4000`

export const addTodo = async (todo) => {
    const response = await fetch(`${API_URL}/todos/items`, {
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(todo),
        // content type?
        headers: { 
            'content-type': 'application/json'
        }
    })
    
    const json = await response.json()
    return json
}
