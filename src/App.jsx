import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './Pages/Bookmark'
import Notfound from './Pages/Notfound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  )
}

export default App
