import React, { Fragment } from 'react'
import "./style/style.scss"
import Course from "./Course"
import Banner from "./Banner"
import Form from "./Form"
import CourseGrid from "./CourseGrid"
import MainMenu from "./MainMenu"
import Historial from "./Historial"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



const App = () => (
  <Router>
    <MainMenu />
{/* Es obligatorio usar el switch para evitar romper las rutas */}
    <Switch>
      <Route path="/" exact component = { Banner }/>
      <Route path="/cursos/:id"  component = { Course }/>
      <Route path="/cursos"  component = { CourseGrid }/>
      <Route path="/historial/:valor"  component = { Historial }/>
      <Route path="/historial"  component = { Historial }/>
      <Route path="/formulario"  component = { () => <Form name="Contacto" />}/>
      <Route component = {() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )}/>
    </Switch>
  </Router>
)

export default App;
