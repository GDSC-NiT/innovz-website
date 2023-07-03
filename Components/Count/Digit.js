import React from 'react'
import { CountUp } from 'use-count-up'

const Digit = (props) => {
  return (
    <div>
        <CountUp isCounting end={props.upto} duration={10.2} />+
    </div>
  )
}

export default Digit