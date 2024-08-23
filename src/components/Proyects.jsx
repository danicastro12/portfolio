import React from "react"
import cardImage from "../assets/card.png"
import "./proyects.css"

export const Proyects = () => {
  return (
    <div id="proyectos" className="pr-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}

export const Card = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={cardImage}></img>
      </div>
      <hr></hr>
      <h3>Proyecto</h3>
      <p>
        ESte proyecto es un proyecto que es muy lol porque es tremendo proyecto
        entonces lol
      </p>
    </div>
  )
}
