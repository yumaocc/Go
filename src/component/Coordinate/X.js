import React from 'react' 
import './x.css'
export default function X(props) {
    const {length} = props
    const x = []
    for(let i = 1; i <= length ;i++){
        x.push(i)
    }

  return (
        < div className='x'>
        {
            x.map(e => {
                return (
                    <div key={e} className='number'>{e}</div>
                )
            })
        }
        </div>
    )
}
