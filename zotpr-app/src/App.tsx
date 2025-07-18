import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.tsx'

import Upper from './pages/Upper.tsx'
import Lower from './pages/Lower.tsx'
import RunTimes from './pages/RunTimes.tsx'
import Reps from './pages/Reps.tsx'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upper" element={<Upper />} />
          <Route path="/lower" element={<Lower />} />
          <Route path="/run-times" element={<RunTimes />} />
          <Route path="/reps" element={<Reps />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
