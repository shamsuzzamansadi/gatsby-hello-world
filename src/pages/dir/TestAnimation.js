import React, { useState } from "react";
import {useSpring, animated} from "react-spring";
import useMeasure from "../useMeasure";

function TestAnimation() {
    const [active, toggle] = useState(false);
    const [bind, {width}] = useMeasure();
    const props = useSpring({
        width: active ? width : 0
    })

    return(
        <div {...bind} class="mainBox" onClick={() => toggle(!active)}>
            <animated.div class="fillBox" style={props} class/>
            <animated.div class="content">
                {props.width.interpolate(x => Math.floor((x.toFixed(0)*100) /width))}
            </animated.div>
        </div>
    )
}
export default TestAnimation;