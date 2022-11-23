import { BrowserRouter, Routes, Route } from 'react-router-dom'

//styles
import './App.scss'

//components
import Header from './Components/Header/Header'

//pages
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
