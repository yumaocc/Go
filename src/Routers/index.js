import React from 'react'
import Nineteen from '../page/Nineteen'
import App from '../App'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='19lu' element={<Nineteen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
