import { useState } from 'react'
import './app.css'

const cloneDeep = (data) => {
  const r = JSON.parse(JSON.stringify(data))
  return r
}

function App(props) {
  const {testQi} = props
  const [color, setColor] = useState('black')


  const [pieces, setPieces] = useState([...testQi])
  window.pieces = pieces


  // const dieOrLive = (a,b) => {
  //   let top = pieces[a+1][b+1]
  //   let bottom = pieces[a-1][b-1]
  //   let left = pieces[a][b-1]
  //   let right = pieces[a][b+1]
  //   console.log(pieces[a][b].color)
  //   console.log(top.color)
  // }


  // const findS = (ps, p, y, x)=>{
  //   const right = pieces[y][x + 1]
  //   const left = pieces[y][x - 1]
  //   const bottom = pieces[y + 1][x]
  //   const top = pieces[y - 1][x]
  //   if( right && right.done && right.color === p.color){
  //     ps.push(right)
  //     findS(ps,right, y, x + 1)
  //   }
  //   // if( left && left.done && left.color === p.color){
  //   //   ps.push(left)
  //   //   findS(ps,left, y, x - 1)
  //   // }
  //   if(bottom && bottom.done && bottom.color === p.color){
  //     ps.push(bottom)
  //     findS(ps,bottom, y + 1, x)
  //   }
  //   // if(top && top.done && top.color === p.color){
  //   //   ps.push(top)
  //   //   findS(ps,top, y - 1, x)
  //   // }

  // }

  // // 检测一颗棋子是否有气
  // const checkQi = (p, youqi, wuqi)=>{
  //   // for (let i = 0; i < ps.length; i++) {
  //   //   const p = ps[i];
  //   //   const {x, y} = p
  //   // }
  //   const {x, y, color} = p
  //   const key = `${x}-${y}`
  //   if(youqi[key]){
  //     return true
  //   }
  //   if(wuqi[key]){
  //     return false
  //   }

  //   const top = pieces[y-1][x]
  //   const bottom = pieces[y + 1][x]
  //   const right = pieces[y][x + 1]
  //   const left = pieces[y][x - 1]

  //   if(!top.done || !bottom.done || !left.done || !right.done){
  //     console.log('qi 1')
  //     const key = `${x}-${y}`
  //     youqi[key] = true
  //     return true
  //   }
  //   let leftQi = false
  //   let rightQi = false
  //   let topQi = false
  //   let bottomQi = false
  //   if( left.done && left.color === color){
  //     const key = `${x-1}-${y}`
  //     if(youqi[key]){
  //       leftQi =  true
  //     }else if(wuqi[key]){
  //       leftQi =  false
  //     }else{
  //       leftQi = checkQi(left, youqi, wuqi)
  //     }
  //   }
  //   if( right.done &&  right.color === color){
  //     // rightQi = checkQi(right,  youqi, wuqi)
  //     const key = `${x+1}-${y}`
  //     if(youqi[key]){
  //       rightQi =  true
  //     }else if(wuqi[key]){
  //       rightQi =  false
  //     }else{
  //       rightQi = checkQi(right, youqi, wuqi)
  //     }
  //   }
  //   if( top.done && top.color === color){
  //     //  topQi = checkQi(top, youqi, wuqi)
  //      const key = `${x}-${y - 1}`
  //     if(youqi[key]){
  //       topQi =  true
  //     }else if(wuqi[key]){
  //       topQi =  false
  //     }else{
  //       topQi = checkQi(top, youqi, wuqi)
  //     }
  //   }
  //   if( bottom.done &&  bottom.color === color){
  //     // bottomQi = checkQi(bottom,  youqi, wuqi)
  //     const key = `${x}-${y + 1}`
  //     if(youqi[key]){
  //       bottomQi =  true
  //     }else if(wuqi[key]){
  //       bottomQi =  false
  //     }else{
  //       bottomQi = checkQi(bottom, youqi, wuqi)
  //     }
  //   }
  //   console.log('qi 2', leftQi, rightQi)
  //   const hasQi = leftQi || rightQi || topQi || bottom
  //   if(hasQi){
  //     youqi[`${x}-${y}`] = true
  //   }else{
  //     wuqi[`${x}-${y}`] = true
  //   }
  //   return hasQi
  // }



  // const deadCheck = (ps)=> {
  //   const deadList = []
  //   for (let y = 0; y < ps.length; y++) {
  //     const line = ps[y];
  //     for (let x = 0; x < line.length; x++) {
  //       const p = line[x];
  //       if(p.done){
  //         // const ps = [p] 
  //         // findS(ps, p, y , x)
  //         // console.log('x:y', x, y)
  //         // console.log(ps)
  //         // 计算当前一块棋子的气
  //         const youqi = {}
  //         const wuqi = {}
  //         const hasQi = checkQi(p, youqi, wuqi)
  //         if(!hasQi){
  //           deadList.push(p)
  //         }
  //       }
  //     }
  //   }

  //   console.log('deadList', deadList)
  //   const newPieces = cloneDeep(ps)
  //   for (let index = 0; index < deadList.length; index++) {
  //     const p = deadList[index];
  //     const {x, y} = p
  //     newPieces[y][x].done = false
  //     console.log('dead', x, y, newPieces)
  //     setPieces(newPieces)
  //   }
  // }


  return (
    <div className="App">
      <div className='bg'>
        <div className='content'>
          {
            pieces.map((items, index) => {
              return items.map((e, i) => {
                return (
                  <div key={i + index + ''} className={'pieces'} >

                    <div className={e.done ? e.color + ' p' : 'dots'} onClick={() => {
                      const x = i
                      const y = index
                      // console.log('x y', x, y)
                      const newPieces = cloneDeep(pieces)
                      const p = newPieces[y][x]
                      if (!e.color) {
                        p.done = true
                        p.color = color
                        setPieces(newPieces)
                      }

                      if (window.m === 0) {
                        setColor('black')
                        p.color = 'black'
                      }
                      if (window.m === 1) {
                        setColor('black')
                        p.color = 'white'
                      }
                      // setPieces(newPieces, ()=>{
                      //   deadCheck()
                      // })
                      // deadCheck(newPieces)
                      const newColor = color === 'white' ? 'black' : 'white'
                      setColor(newColor)
                      // dieOrLive(index,i)
                    }}>

                    </div>
                  </div>
                )
              })
            })
          }
        </div>
      </div>
    </div>

  );
}

export default App;
