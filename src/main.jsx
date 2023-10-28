import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route , RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import App from './components/Moviecard/App'
import Movies from './components/Movies/Movies'
import SignUp from './components/SignUp&Login/Signup'
import Login from './components/SignUp&Login/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='signup' element={<SignUp/>} />
    <Route path='login' element={<Login/>}/>
    </Route>
    </>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
