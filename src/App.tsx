import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from './hooks'
import './App.css'

function App() {
  const weatherData = useAppSelector((state) => state.weather.data)
  const navigate = useNavigate();

  useEffect(() => {
    console.log('App mounted')
    if (weatherData) { 
      navigate("/dashboard")
    } else {
      navigate("/form")
    }
  }, [])
  
  return (
    <>
      <main className='overflow-hidden'>
      <Outlet/>
      </main>
    </>
  )
}

export default App
