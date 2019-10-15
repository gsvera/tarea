import React, { Fragment } from 'react'

const cursos = [
    {
      "id"       : 1,
      "titulo"   : "React Desde Cero",
      "imagen"   : "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
      "precio"   : 30,
      "profesor" : "Guillermo V."
    },
    {
      "id"       : 2,
      "titulo"   : "PHP Desde Cero",
      "imagen"   : "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/php%20desde%20cero.jpg",
      "precio"   : 40,
      "profesor" : "Salvador V."
    },
    {
      "id"       : 3,
      "titulo"   : "Node JS",
      "imagen"   : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/Node.jpg?itok=SurL1AZa",
      "precio"   : 50,
      "profesor" : "Morales V."},
    {
      "id"       : 4,
      "titulo"   : "Git",
      "imagen"   : "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/git_0.jpg?itok=SxlbiFDD",
      "precio"   : 15,
      "profesor" : "Yansi de Vera"
    }
  ]

const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        
        <div className="ed-grid m-grid-3">
            {
        cursoActual ? (
            <>
            <h1 className="m-cols-3">Curso: {cursoActual.titulo}</h1>
            <img className="m-cols-1" src={cursoActual.imagen} alt={cursoActual.titulo} />
            <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
            </>
        ) :    
            <h1>El curso no existe</h1>
        }
        </div>
        )
}

export default Course