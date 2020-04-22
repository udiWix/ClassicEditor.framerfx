import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanel(props) {
    const { focused, ...rest } = props

    return (
        <Frame
            {...rest}
            visible={focused}
            background={"transparent"}
            style={{ borderLeft: "1px solid #C2CAD5" }}
        ></Frame>
    )
}

PropertiesPanel.defaultProps = {
    height: "100%",
    width: 258,
    focused: false,
}
