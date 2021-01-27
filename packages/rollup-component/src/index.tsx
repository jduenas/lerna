import { useState } from 'react'
import style from './styles.module.css'

function RollupComponent() {
  const [state, setState] = useState({
    clicked: false
  })

  let currentState = ''
  if (state.clicked) {
    currentState = style.clicked
  }

  return (
    <button
      onClick={() => setState({ clicked: !state.clicked })}
      className={`${style.container} ${currentState}`}
    >
      {`Rollup Component Successfuly: ${
        state.clicked ? 'CLICKED' : 'NOT CLICKED'
      }`}
    </button>
  )
}

export default RollupComponent
