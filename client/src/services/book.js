import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/book'

const create = async (dataObj) => {
  const request = await axios.post(BASE_URL, dataObj)

  if (request.data && request.status === 200) {
    return request.data
  }
}

const fetchAll = async () => {
  const request = await axios.get(BASE_URL)

  if (request.data && request.status === 200) return request.data
}

const fetchByName = async (name) => {
  const request = await axios.get(BASE_URL + `/${name}`)

  if (request.data && request.status === 200) return request.data
}

const bookService = {
  create,
  fetchAll,
  fetchByName,
}

export default bookService
