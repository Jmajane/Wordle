import { useState } from "react"
import { boardDefault } from "../Words"

function Board() {
    const [board, useBoard] = useState(boardDefault)
  return (
    <div className="board">
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
    </div>
  )
}

export default Board