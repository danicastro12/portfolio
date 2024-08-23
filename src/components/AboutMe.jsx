import React from "react"
import "./aboutme.css"
import react from "../assets/react.svg"
import node from "../assets/nodejs.svg"
import express from "../assets/express.svg"

export const AboutMe = () => {
  return (
    <section id="sobremi" className="about">
      <h2>Sobre mí</h2>
      <div className="about-section">
        <p>
          Me llamo Daniel Castro y vivo en Argentina. Desde muy pequeño me
          interese por la tecnología sobre todo por la programación, la primera
          vez que programe fue a los 12 años.
        </p>
        <p>
          En mi educación secundaria orientada a electronica una de las materias
          era programación en c, con eso aprendí bastantes conceptos y luego me
          decidi por el lado del desarrollo web.
        </p>
        <p>
          He tocado la programacion en diferentes areas como IoT, desarrollo de
          videojuegos, programacion de microcontroladores, etc. Pero la que mas
          me intereso fue el area del desarrollo web
        </p>
      </div>
      <h3>Tecnologias que uso</h3>
      <div className="tech-badget">
        <img src={react}></img>
        <img className="ico" src={node}></img>
        <img className="ico" src={express}></img>
      </div>
    </section>
  )
}
