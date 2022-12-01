import { BrowserRouter, Routes, Route } from 'react-router-dom'

//styles
import './App.scss'

//components
import Header from './Components/Header/Header'

//pages
import Home from './Pages/Home/Home'
import WebDesign from './Pages/WebDesign/WebDesign'
import AppDesign from './Pages/AppDesign/AppDesign'
import GraphicDesign from './Pages/GraphicDesign/GraphicDesign'
import About from './Pages/About/About'
import Locations from './Pages/Locations/Locations'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
