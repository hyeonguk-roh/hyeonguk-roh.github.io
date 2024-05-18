import { React } from 'react'

export default function AboutMe() {
  return (
    <div className="body">
      <div className='aboutme'>
        <h2>About Me</h2>
      </div>
      <div className='webdev'>
        <div className='text'>
          <h3>Web Development</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className='graphics'>

        </div>
      </div>
      <div className='gamedev'>
        <div className='text'>
          <h3>Game Development</h3>
          <ul>
            <li>Game Dev</li>
            <li>2D Sprite Design</li>
            <li>2D Sprite Animation</li>
            <li>Worldbuilding</li>
            <li>Unity</li>
            <li>Roblox Studio</li>
            <li>C#</li>
            <li>Lua</li>
          </ul>
        </div>
        <div className='graphics'>

        </div>
      </div>
      <div className='skills'>
        <div className='text'>
          <h3>Other Skills</h3>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
            <li>UI Design</li>
            <li>Teamwork</li>
            <li>Project Planning</li>
            <li>Korean Fluency</li>
            <li>Organization</li>
          </ul>
        </div>
        <div className='graphics'>

        </div>
      </div>
    </div>
  )
}