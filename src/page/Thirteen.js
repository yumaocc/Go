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
      <X length= {13}/>
      <_Y length={13}/>
      <Mask x={13} y={12} play={13}/>
      <Model testQi={testQi}/>
      <TestButton />
    </div>
  )
}
