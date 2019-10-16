import React, { Fragment } from 'react'
import "../style/style.scss"
import Course from "./Pages/Course"

import Form from "./Pages/Form"
import Courses from "./Pages/Courses"
import MainMenu from "./Organisms/MainMenu"
import Historial from "./Pages/Historial"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Pages/Home'
import Users from './Pages/Users'



const App = () => (
  <Router>
    <MainMenu />
{/* Es obligatorio usar el switch para evitar romper las rutas */}
    <Switch>
      <Route path="/" exact component = { Home }/>
      <Route path="/cursos/:id"  component = { Course }/>
      <Route path="/cursos"  component = { Courses }/>
      <Route path="/historial/:valor"  component = { Historial }/>
      <Route path="/historial"  component = { Historial }/>
      <Route path="/usuarios"  component = { Users }/>
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
