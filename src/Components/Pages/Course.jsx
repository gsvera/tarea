import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useCourse from '../CustomsHooks/useCourse'

const Course = ({ match }) => {


// Se ejecuta cada vez que se renderiza el componente
const [comment, setComment] = useState("Sin comentarios.")
const nombre = useCourse(match.params.id)

const myComment = e => {
    setComment(e.target.value)
}
    return (
        
        <div className="ed-grid m-grid-3">
            {
        nombre ? (
            <div className="ed-grid">
           <div className="l-block">
            <h1 className="m-cols-3">Curso: {nombre.titulo}</h1>
            <img className="m-cols-1" src={nombre.image} alt={nombre.titulo} />
            <p className="m-cols-2">Profesor: {nombre.profesor}</p>
           </div>
           <div className="ed-grid">
               <h2>Escribe tu comentario</h2>
               <input type="text" placeholder="Escribe..." onChange={myComment.bind(this)} />
               <p>{comment}</p>
           </div>
            
            </div>
        ) :    
            <h1>El curso no existe</h1>
        }
        </div>
        )
}

export default Course