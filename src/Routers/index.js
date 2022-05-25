import React from 'react'
import Nineteen from '../page/Nineteen'
import App from '../App'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Thirteen from '../page/Thirteen'
import Nine from '../page/Nine'
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='19lu' element={<Nineteen />}></Route>
          <Route path='13lu' element={<Thirteen />}></Route>
          <Route path='9lu' element={<Nine />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
