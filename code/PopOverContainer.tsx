import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { PopOver } from "./canvas"
import { useEffect, useRef } from "react"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PopOverContainer(props) {
    const onClick = () => {
        props.callback()
        console.log("vis")
    }

    return (
        <Frame
            background={"transparent"}
            top={props.top}
            left={props.left}
            onClick={onClick}
            visible={props.isVisible}
        >
            <PopOver />
        </Frame>
    )
}

PopOverContainer.defaultProps = {
    callback: () => {},
    top: 0,
    left: 0,
    isVisible: false,
}

// Learn more: https://framer.com/api/property-controls/
