import axios from "axios";

const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (contact) => {
    const request = axios.post(url, contact)
    return request.then(response => response.data)
}

const update = (id, msg) => {
    // console.log(id, msg)
    const request = axios.put(`${url}/${id}`, msg)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}
export default { getAll, create, update, remove }


