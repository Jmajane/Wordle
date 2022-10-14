import React from 'react'

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]

  return (
    <div className='keyboard'>Keyboard
      <div className='line1'>
        {keys1.map((key) => {
          return <div> {key} </div>
      })}
        </div>
      <div className='line2'>
        {keys2.map((key) => {
          return <div> {key} </div>
        })}
      </div>
      <div className='line3'>
        {keys3.map((key) => {
          return <div> {key} </div>
        })}
      </div>
    </div>
  )
}

export default Keyboard