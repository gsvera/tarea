import React from 'react'
import Card from '../Molecules/Card'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({cursos}) => (
    <div className="ed-grid">
    { cursos.map( c => (
        <Card
        key = {c.id}
        id = {c.id}
        titulo = {c.titulo}
        image = {c.image}
        precio = {c.precio}
        profesor = {c.profesor}
        />
    ))}
</div>
)

// ASI SE LLAMA UN COMPONENTE DE ORDEN SUPERIOR O "HOC"
export default withLoader ("cursos") (CourseGrid)