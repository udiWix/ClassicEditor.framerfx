import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { EditorCMenu } from "./canvas"
import { useEffect, useRef } from "react"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function EditorMenu(props) {
    return (
        <Frame
            width={200}
            height={164}
            visible={props.visible}
            left={props.left - 300}
            top={props.top - 500}
        >
            <EditorCMenu />
        </Frame>
    )
}

EditorMenu.defaultProps = {
    visible: true,
    callback: () => {},
    left: 0,
    top: 0,
}

// Learn more: https://framer.com/api/property-controls/
