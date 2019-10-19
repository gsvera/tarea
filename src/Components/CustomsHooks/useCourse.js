import {useState, useEffect} from 'react'
import axios from 'axios'

const link = 'http://my-json-server.typicode.com/gsvera/json-db/cursos/'

const useCourse = id => {

    const [nombre, cualquierNombre] = useState({})

    useEffect(() => {
        axios.get(`${link}${id}`)
        .then(resp => cualquierNombre(resp.data))
      // Se agrega los corchete vacios para evitar que se buclee
      }, [])

      return nombre
}

export default useCourse