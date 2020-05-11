import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { PopOver } from "./canvas"
import { useEffect, useRef } from "react"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PopOverContainer(props) {
    const node = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            setTimeout(
                function() {
                    props.callback()
                }.bind(this),
                500
            )
            return
        }
        props.callback()
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <Frame background={"transparent"} ref={node}>
            <PopOver />
        </Frame>
    )
}

PopOverContainer.defaultProps = {
    callback: () => {},
}

// Learn more: https://framer.com/api/property-controls/
