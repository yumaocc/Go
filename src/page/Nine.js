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
      <X length= {9}/>
      <_Y length={9}/>
      <Mask x={9} y= {8} play={9}/>
      <Model testQi={testQi}/>
      <TestButton />
    </div>
  )
}
