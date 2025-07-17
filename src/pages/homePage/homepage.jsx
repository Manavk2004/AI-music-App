import { useState } from 'react'
import '../../css/homepage.css'
import home from "../../assets/home.png"
import musicNote from "../../assets/music-note.png"
import folder from "../../assets/folder.png"
import profile from "../../assets/profile.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="background">
        <div id="nav-bar-container">
          <nav id="navbar">
            <ul id="navbarUL">
              <a class="nav-a"> <img className="nav-icon" id="home-png" src={home}/> </a>
              <a class="nav-a"> <img className="nav-icon" id="music-note" src={musicNote}/> </a>
              <a class="nav-a"> <img className="nav-icon" id="folder" src={folder}/> </a>
              <a class="nav-a"> <img className="nav-icon" id="folder" src={profile}/> </a>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App
