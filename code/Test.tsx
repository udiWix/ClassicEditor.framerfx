import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Test(props) {
    const { text, tint, ...rest } = props

    const onClick = e => {
        props.setSelected(props.text)
    }

    return (
        <Frame
            {...rest}
            background={tint}
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
            onClick={onClick}
        >
            {text}
        </Frame>
    )
}

Test.defaultProps = {
    height: 128,
    width: 240,
    text: "Get started!",
    tint: "#0099ff",
    setSelected: () => {},
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Test, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
})
