import React, { useState } from 'react'
import './index.css'
export default function Index() {
  const [show ,setShow] = useState(false)
  return (
    <div className='btn'>
      <button onClick={()=>{
        setShow(!show)
      }}>练习</button>
      {
        show ? 
        <>
        <button onClick={()=>{
          window.m = 0
          setShow(!show)
        }}>执黑</button>
        <button onClick={() => {
          window.m = 1
          setShow(!show)
        }}>执白</button>
         <button onClick={() => {
          window.m = 10
          setShow(!show)
        }}>复原</button>
        </> : ''
      }
    </div>
  )
}
