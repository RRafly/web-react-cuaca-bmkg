import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='container min-h-screen mx-auto text-left'>
      <Outlet/>
      </main>
    </>
  )
}

export default App
