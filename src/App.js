import { BrowserRouter, Routes, Route } from 'react-router-dom'

//styles
import './App.scss'

//components
import Header from './Components/Header'

//pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
