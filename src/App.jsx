import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roadmaps from './pages/Roadmaps'
import Platforms from './pages/Platforms'
import About from './pages/About'
import WebDevelopment from './pages/roadmaps/WebDevelopment'
import Python from './pages/roadmaps/Python'
import DataScience from './pages/roadmaps/DataScience'
import MobileDevelopmentRoadmap from './pages/roadmaps/MobileDevelopmentRoadmap'
import AIRoadmap from './pages/roadmaps/AIRoadmap'
import IoT from './pages/roadmaps/IoTRoadmap'
import Programming from './pages/roadmaps/Programming'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/roadmaps/web-development" element={<WebDevelopment />} />
        <Route path="/roadmaps/python" element={<Python />} />
        <Route path="/roadmaps/data-science" element={<DataScience />} />  
        <Route path="/roadmaps/mobile-development" element={<MobileDevelopmentRoadmap />} />      
        <Route path="/roadmaps/ai" element={<AIRoadmap />} />   
        <Route path="/roadmaps/iot" element={<IoT />} /> 
        <Route path="/roadmaps/beginner-programming" element={<Programming />} />     
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}