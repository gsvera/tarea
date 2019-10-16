import React, {Component} from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import axios from 'axios'



class Courses extends Component {
  constructor (props){
    super(props)

    this.state = {
      cursos: []
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/gsvera/json-db/cursos')
    .then(response => this.setState({
        cursos: response.data
      })
    )
  }
  render() {
    const {cursos} = this.state
    return <CourseGrid cursos ={cursos} />
  }
}
   


export default Courses