import { React } from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className="topbar">
      <h1 className="logo">Hyeonguk Roh</h1>
      <div className="navbar">
        <ul>
          <li><Link to="/web-dev"><h3>Web Dev</h3></Link></li>
          <li><Link to="/game-dev"><h3>Game Dev</h3></Link></li>
          <li><Link to="/aboutme"><h3>About Me</h3></Link></li>
        </ul>
      </div>
    </div>
  )
}