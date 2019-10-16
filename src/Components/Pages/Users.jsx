import React, {Component} from 'react'
import UserGrid from '../Organisms/UserGrid'
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
// PETICIONES A SERVIDOR CON "fetch"
    // componentDidMount() {
// A "fetch" SE LE AGREGA COMO PARAMETROS LA "url" Y EL "metodo"

    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
// SE ESPERA LA PRIMERA PROMESA

    //     .then(response => response.json())
// CON LA SEGUNDA PROMESA SE SETEA 

    //     .then(response2 => {
    //         this.setState({
    //             users: response2
    //         })
    //     })
    // }

// PETICIONES A SRVIDOR CON "axios"
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render() {
        const { users } = this.state
        return <UserGrid users={users} />
    }
}

export default Users