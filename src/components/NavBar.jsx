import React from "react"
import "./navbar.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a href="#sobremi">Sobre mi</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  )
}
