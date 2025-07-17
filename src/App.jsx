import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roadmaps from './pages/Roadmaps'
import Platforms from './pages/Platforms'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}