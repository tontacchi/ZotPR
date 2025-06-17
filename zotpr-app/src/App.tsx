import Navbar from './components/navbar';

import './App.css'

function App() {
  return (
    <div className="h-screen flex flex-col items-center text-white"
         style={{ backgroundImage: 'var(--background-image)', opacity: 0.9,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
          }}>
    <div className="absolute inset-0 bg-black opacity-30"></div>
      <Navbar />
      <div>
          <h1 className="text-2xl text-center py-4">Welcome to ZotPR!</h1>
          <h2 className="text-xl text-center">{"<(^_^)>"}</h2>
      </div>
    </div>
  )
}

export default App
