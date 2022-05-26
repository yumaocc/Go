import React from 'react'
import {Link ,Outlet} from 'react-router-dom'
export default function App() {
  return (
    <>
    <div>
    <Link to='/19lu' state={{length: 19}}>19路</Link>
    <Link to='/19lu' state={{length: 13}}>13路</Link>
    <Link to='/19lu' state={{length: 9}}>9路</Link>
    </div>
    <Outlet />
    </>
  )
}
