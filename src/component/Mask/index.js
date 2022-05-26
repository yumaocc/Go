import './index.css'
import React, { useState } from 'react'

export default function Index(props) {
    const{x,y ,play} = props
   
    const arr = new Array(x);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(y).fill(0);
    }
    return (
        <div className={'box' + play}>
            <div className={'mask_content' + play}>
                {
                    arr.map((e, i) => {
                        return e.map((e, index) => {
                            return (

                                <div key={i + index + ''} className={ index === play -1 ? 'special' + play : 'mask' + play} onClick={()=>{
                                    console.log(i,index,'i and index')
                                }}></div>)
                        })
                    })
                }
            </div>
        </div>

    )
}
