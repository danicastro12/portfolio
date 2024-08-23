import React from "react"
import "./mainheader.css"
import avatar from "../assets/avatar.svg"

export const MainHeader = () => {
  return (
    <div className="header-container">
      <header className="main-header">
        <h1>
          Hola, Soy <span className="name-span">Daniel</span>
        </h1>
        <h2>Desarrollador Web FullStack</h2>
      </header>
      <img className="avatar-image" src={avatar} />
    </div>
  )
}
