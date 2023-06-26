const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {
     // add url which is for delete
    // add the _id for the ':id' param
    const response = await fetch(`${API_URL}/todos/items/${id}`, {
        // method type?
        method: 'GET',
        // content type?
        headers: {
            'content-type': 'application/json'
        }
    })
    // convert to json
    const json = await response.json()
    // return json
    return json

}