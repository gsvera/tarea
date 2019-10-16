import React from 'react'

const Banner = () => (
    <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="Banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHNj5yNXVC94d05qKX_oRPsdUbELN99W0WMvt-Hqirbtx3ch6m" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso de EDTEAM</p>
          <p> Sere el mejor ya lo veran!!</p>
          <a href="https://ed.team" className="button">Inicio</a>
        </div>
      </div>
    </div>
  </div>
)

export default Banner