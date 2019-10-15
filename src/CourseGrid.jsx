import React from 'react'
import Card from './Card'

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

const CourseGrid = () => (
    <div className="ed-grid">
        { cursos.map( c => (
            <Card
            key = {c.id}
            id = {c.id}
            title = {c.titulo}
            image = {c.imagen}
            price = {c.price}
            profesor = {c.profesor}
            />
        ))}
    </div>
)

export default CourseGrid