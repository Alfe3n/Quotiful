import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './Pages/Bookmark'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
    </div>
  )
}

export default App
