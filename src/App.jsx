import "./App.css"
import { AboutMe } from "./components/AboutMe"
import { MainHeader } from "./components/MainHeader"
import { NavBar } from "./components/NavBar"
import { Proyects } from "./components/Proyects"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainHeader></MainHeader>
      <AboutMe></AboutMe>
      <Proyects></Proyects>
    </>
  )
}

export default App
