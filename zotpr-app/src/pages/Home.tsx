import '../App.css'

function Home() {
  return (
    <div className="h-screen flex flex-col bg-ZotDarkBlue items-center text-white"
        style={{ backgroundImage: 'var(--background-image)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }}>
        <div>
            <h1 className="text-2xl text-center py-4">Welcome to ZotPR!</h1>
            <h2 className="text-xl text-center">{"<(^_^)>"}</h2>
        </div>
    </div>
  )
}

export default Home