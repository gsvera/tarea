import React, {Component} from 'react'

// Para hacer un formularios se crea un clase y se tiene
// que usar la herencia con "Component"
class Form extends Component {
    constructor (props){
        super (props)
// Para declarar el estado en este componente que se utilizando
// en este componente "this.state"
        this.state = {
            nombre: "",
            email: "",
            fecha: new Date()
        }
// Estos son metodos que realizan cambios de estado
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }

    changeName(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

        changeDate() {
            this.setState({
                fecha: new Date()
            })
    }

    render() {
        
        return (
            <div className="ed-grid">
                    <h1>Formulario{this.props.name}</h1>
                    <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
                    <form id="elemento">
                        <div className="ed-grid m-grid-2">
                            <div className="form__item">
                                <label>Nombre</label>
                                <input type="text" onChange={this.changeName}/>
                            </div>
                            <div className="form__item">
                                <label>Email</label>
                                <input type="email" onChange={this.changeEmail}/>
                            </div>  
                        </div>
                    </form>
                <div>
                    <h2>{`hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }
// con "componentDidMount" se utiliza para cuando ya se monto el dom
    componentDidMount () {
      this.intervaloFecha = setInterval(() => {
          this.changeDate()
      } ,1000)
    }
// con "componentDidUpdate" se utiliza cuando se actualiza el montaje
    componentDidUpdate () {

    }
// con "componentWillUnmount" se utiliza al finalizar el montaje
    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
}

export default Form