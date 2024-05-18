import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Canvas from '../index/Canvas'
import AboutMe from '../aboutme/AboutMe'
import Topbar from '../universal/Topbar'

export default function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={ <Canvas /> } />
          <Route exact path="/aboutme" element={ <AboutMe /> } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}
