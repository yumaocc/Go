import { useState, useRef } from 'react'
import './app.css'

const cloneDeep = (data) => {
  const r = JSON.parse(JSON.stringify(data))
  return r
}
// blocks 代表棋块。  
// 
const blocks = {
  black: {
    q: 0,
    ps: {
      '2_3': {
        hasQi: true,
        items: [
          {
            x: 2,
            y: 3
          },
          {
            x: 3,
            y: 3
          },
        ]
      }
    }
  },
  white: {

  },
}

function App(props) {
  const { testQi, createPieces, play } = props
  const [color, setColor] = useState('black')
  const blocksRef = useRef({
    black: {
      ps: {}
    },
    white: {
      ps: {}
    },
  })
  const [pieces, setPieces] = useState([...testQi])
  // const [blocks, setBlocks] = useState({})

  window.pieces = pieces


  // const dieOrLive = (a,b) => {
  //   let top = pieces[a+1][b+1]
  //   let bottom = pieces[a-1][b-1]
  //   let left = pieces[a][b-1]
  //   let right = pieces[a][b+1]
  //   console.log(pieces[a][b].color)
  //   console.log(top.color)
  // }


  const findS = (ps, p, y, x) => {
    const right = pieces[y][x + 1]
    // const left = pieces[y][x - 1]
    const bottom = pieces[y + 1][x]
    // const top = pieces[y - 1][x]
    if (right && right.done && right.color === p.color) {
      ps.push(right)
      findS(ps, right, y, x + 1)
    }
    // if( left && left.done && left.color === p.color){
    //   ps.push(left)
    //   findS(ps,left, y, x - 1)
    // }
    if (bottom && bottom.done && bottom.color === p.color) {
      ps.push(bottom)
      findS(ps, bottom, y + 1, x)
    }
    // if(top && top.done && top.color === p.color){
    //   ps.push(top)
    //   findS(ps,top, y - 1, x)
    // }
  }
  //原本的
  // 检测一颗棋子是否有气
  // const checkQi = (p) => {
  //   // for (let i = 0; i < ps.length; i++) {
  //   //   const p = ps[i];
  //   //   const {x, y} = p
  //   // }
  //   console.log(p,'checkQi')
  //   const { x, y, color } = p
  //   const key = `${x}-${y}`
  //   const top = pieces[y - 1][x]
  //   const bottom = pieces[y + 1][x]
  //   const right = pieces[y][x + 1]
  //   const left = pieces[y][x - 1]

  //   if (!top.done || !bottom.done || !left.done || !right.done) {
  //     return true
  //   }
  //   let rightQi = false
  //   let bottomQi = false

  //   if (right.done && right.color === color) {
  //     const key = `${x + 1}-${y}`
  //     rightQi = checkQi(right)
  //   }
  //   if (bottom.done && bottom.color === color) {
  //     bottomQi = checkQi(bottom)
  //   }
  //   const hasQi = bottomQi || rightQi
  //   console.log('hasQi==', key, hasQi)
  //   return hasQi
  // }
  const checkQi = (p) => {
    // for (let i = 0; i < ps.length; i++) {
    //   const p = ps[i];
    //   const {x, y} = p
    // }

    const { x, y, color } = p
    const key = `${p.x}-${p.y}`
    const top = pieces[y - 1][x]
    const bottom = pieces[y + 1][x]
    const right = pieces[y][x + 1]
    const left = pieces[y][x - 1]
    if (!top.done || !bottom.done || !left.done || !right.done) {
      return true
    }
    let rightQi = false
    let bottomQi = false

    if (right.done && right.color === color) {
      const key = `${x + 1}-${y}`
      rightQi = checkQi(right)
    }
    if (bottom.done && bottom.color === color) {
      bottomQi = checkQi(bottom)
    }
    const hasQi = bottomQi || rightQi
    console.log('hasQi==', key, hasQi)
    return hasQi
  }



  // const checkBlocksQi = (ps)=>{
  //   for (let index = 0; index < blackKeys.length; index++) {
  //     const blackXy = blackKeys[index];
  //     const items = black.ps[blackXy]
  //     checkQi(items[0])
  //   }
  // }
  //原本的
  // const setBlocksQ = () => {
  //   const blocks = blocksRef.current
  //   const { black, white } = blocks
  //   const qs = {}
  //   const blackKeys = Object.keys(black.ps)
  //   const whiteKeys = Object.keys(white.ps)
  //   for (let index = 0; index < blackKeys.length; index++) {
  //     const xy = blackKeys[index];
  //     const items = black.ps[xy]
  //     const q = checkQi(items[0])
  //     qs[xy] = q
  //   }

  //   for (let index = 0; index < whiteKeys.length; index++) {
  //     const xy = whiteKeys[index];
  //     const items = white.ps[xy]
  //     const q = checkQi(items[0])
  //     qs[xy] = q
  //   }
  //   console.log('qs', qs)
  //   return qs
  // }

  const setBlocksQ = () => {
    const blocks = blocksRef.current
    const { black, white } = blocks
    const qs = {}

    const blackKeys = Object.keys(black.ps)
    const whiteKeys = Object.keys(white.ps)
    console.log('black = ', blackKeys, 'white = ', whiteKeys)
    for (let index = 0; index < blackKeys.length; index++) {
      const xy = blackKeys[index];
      const items = black.ps[xy].items
      console.log('items =', items)
      const q = checkQi(items[0])
      qs[xy] = q
    }

    for (let index = 0; index < whiteKeys.length; index++) {
      const xy = whiteKeys[index];
      const items = white.ps[xy]

      const q = checkQi(items[0])
      qs[xy] = q
    }
    console.log('qs', qs)
    return qs
  }
  const isFindItem = (items, p) => {
    const isFindP = items.find((i) => {
      const r = i.x === p.x && i.y === p.y
      return r
    })
    return isFindP
  }

  const isPInBlocks = (p) => {
    const { color = 'white' } = p
    const bs = blocksRef.current[color] || {}
    const ps = bs.ps || {}
    const psKeys = Object.keys(ps)
    for (let index = 0; index < psKeys.length; index++) {
      const blockXy = psKeys[index];
      const items = ps[blockXy].items
      const [x, y] = blockXy.split('-')
      if (x === p.x && y === p.y) {
        return true
      }
      const isFindOne = isFindItem(items, p)
      if (isFindOne) {
        return isFindOne
      }
    }
    return false
  }

  const pickBlocks = (ps) => {
    for (let y = 0; y < ps.length; y++) {
      const line = ps[y];
      for (let x = 0; x < line.length; x++) {
        const p = line[x];
        if (p.done && !isPInBlocks(p)) {
          const ps = [p]
          findS(ps, p, y, x)
          console.log('x:y', x, y)
          console.log(ps)
          const k = `${x}-${y}`
          blocksRef.current[p.color].ps[k] = {
            items: ps
          }
          const hasQi = checkQi(p)
          blocksRef.current[p.color].ps[k].hasQi = hasQi
        }
      }
    }

  }

  const pickOutPiece = () => {

    const blocks = setBlocksQ()
    const keys = Object.keys(blocks)
    for (let index = 0; index < keys.length; index++) {
      const k = keys[index];
    }
  }

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
  const needUpdateQi = () => {
    const noQiKeys = blocksRef.current.black.ps
    for (const key in noQiKeys) {
      if (Object.hasOwnProperty.call(noQiKeys, key)) {
        const e = noQiKeys[key];
        if (!e.hasQi) {
          e.items.map(e => {
            let x = e.x
            let y = e.y
            pieces[y][x].done = false
            setPieces(pieces)
          })
        }
      }
    }
  }

  return (
    <div className="App">
      <div className={'bg' + play}>
        <div className={'content' + play}>
          {
            pieces.map((items, index) => {
              return items.map((e, i) => {
                return (
                  <div key={i + index + ''} className={'pieces' + play} >
                    <div className={e.done ? e.color + play : 'dots' + play} onClick={() => {
                      pickBlocks(pieces)
                      needUpdateQi()
                      console.log(blocksRef.current, '要被吃掉的棋子')
                      const x = i
                      const y = index
                      // console.log('x y', x, y)
                      const newPieces = cloneDeep(pieces)
                      const p = newPieces[y][x]
                      if (!e.done) {
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
                      // pickBlocks(pieces)
                    }}>
                      {e.done && `${i}:${index}`}
                    </div>
                  </div>
                )
              })
            })
          }
        </div>
      </div>
      <div className='test'>
        <button onClick={() => {
          pickBlocks(pieces)
        }}> 计算棋块 </button>

        <button onClick={() => {
          setBlocksQ()
        }}> 计算气 </button>

        <button onClick={() => {
          pickOutPiece()
        }}> 提子 </button>
      </div>

    </div>

  );
}

export default App;
