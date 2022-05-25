import React from 'react'
import Model from '../component/Model'
import X from '../component/Coordinate/X'
import _Y from '../component/Coordinate/Y'
import { testQi } from "../component/mock";
import Mask from '../component/Mask/index'
import TestButton from '../component/TestButton'
export default function App() {
  return (
    <div>
      <X length= {19}/>
      <_Y length={19}/>
      <Mask x={19} y={18} play={19}/>
      <Model testQi={testQi}/>
      <TestButton />
    </div>
  )
}
