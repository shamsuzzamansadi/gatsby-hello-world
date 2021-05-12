import React, { useState} from "react"
import Link from "gatsby-link"
import {useSpring, animated, config} from "react-spring"
import { render } from "react-dom";
import TestAnimation from "./TestAnimation";

function Text() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.h1 style={props}>hello</animated.h1>
}

export default () => {
  return <div style={{color: 'teal', backgroundColor: 'whitesmoke'}}>
      <h1>TestAnimation</h1>
      <Text />      
      <br />
      <TestAnimation />
      <br />
      <Link to="/">Go To Home </Link>
  </div>
}