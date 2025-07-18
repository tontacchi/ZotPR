import '../App.css'

function Login() {
  return (
    <div className="h-screen flex flex-col bg-black/80 items-center text-white"
         style={{ backgroundImage: 'var(--zotpr-mascot)', opacity: .7,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          }}>
      <div className="bg-ZotDarkBlue/70 p-8 mt-32 rounded-lg w-80">
        <h1 className="text-xl text-center">Login Page</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>
            <input className="w-full p-2 bg-transparent border border-ZotGold rounded-lg" type="text" id="username" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input className="w-full p-2 bg-transparent border border-ZotGold rounded-lg" type="password" id="password" />
          </div>
          <button className="w-full bg-ZotGold text-ZotDarkBlue font-bold py-2 rounded-lg hover:bg-ZotDarkGold" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login