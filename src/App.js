import logo from './logo.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Booking from './Pages/Booking'
import Register from './Pages/Register'
import Edit from './Pages/Edit'
import photo from './image/photo.png'

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Routes>
          <Route path='/navbar' element={<Navbar></Navbar>} />
          <Route path='/home' element={[<Home></Home>, <Navbar></Navbar>]} />
          <Route
            path='/edit/:id'
            element={[<Navbar></Navbar>, <Edit></Edit>]}
          />
          <Route
            path='/booking'
            element={[<Navbar></Navbar>, <Booking></Booking>]}
          />
          <Route path='/home' element={[<Home></Home>, <Navbar></Navbar>]} />
          <Route
            path='/details'
            element={[<Navbar></Navbar>, <Details></Details>]}
          />
          <Route
            path='/register'
            element={[<Navbar></Navbar>, <Register></Register>]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
