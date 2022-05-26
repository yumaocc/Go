import React from 'react'
import Model from '../component/Model'
import X from '../component/Coordinate/X'
import _Y from '../component/Coordinate/Y'
import { testQi ,createPieces} from "../component/mock";
import Mask from '../component/Mask/index'
import Btn from '../component/Btn'
import './index.css'
import { useLocation } from 'react-router-dom';
export default function App() {
  const {state} = useLocation()
  let s = createPieces(state.length)
  return (
    <div className='super'>
      <X length= {state.length}/>
      <_Y length={state.length}/>
      <Mask x={state.length -1} y={state.length -1} play={state.length}/>
      <Model testQi={testQi} createPieces={s} play={state.length}/>
      <Btn />
    </div>
  )
}
