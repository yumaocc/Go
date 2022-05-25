import React from 'react'
import './y.css'
export default function _Y(props) {
    const {length} = props
    const yLength = []
    const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for (let i = 0 ;i < length ;i++){
        yLength.push(letter[i])
    }
  return (
    <div className='y'>
        {
            yLength.map(e => {
                return (
                    <div className='number' key={e}>{e}</div>
                )
            })
        }
    </div>
  )
}
