import React from 'react'
import Nineteen from './page/Nineteen'
import {Link ,Outlet} from 'react-router-dom'
export default function App() {
  return (
    <>
    <div>
    <Link to='/19lu'>19路</Link>
    <Link to='/13lu'>13路</Link>
    <Link to='/9lu'>9路</Link>
    </div>
    <Outlet />
    </>
  )
}
