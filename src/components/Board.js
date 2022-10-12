import { useState } from "react"
import { boardDefault } from "../Words"

function Board() {
    const [board, useBoard] = useState(boardDefault)
  return (
    <div>Board</div>
  )
}

export default Board