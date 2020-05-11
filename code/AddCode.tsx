import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { TextLabel } from "../../../wix-base-ui"
import "../../../wix-base-ui/dist/style.css"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function AddCode(props) {
    const [hover, setHover] = React.useState("white")
    const onEnter = e => {
        setHover("#EAF7FF")
    }
    const onLeave = e => {
        setHover("white")
    }
    return (
        <Stack
            height={87}
            width={273}
            background={hover}
            style={{ padding: "24px 20px", borderBottom: "1px solid #D9E1E8" }}
            alignment="start"
            gap={3}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <TextLabel value={props.label} type={"T19"} />
            <TextLabel value={props.para} type={"T02"} />
        </Stack>
    )
}

AddCode.defaultProps = {
    label: "Some Label",
    para: "Some text",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(AddCode, {
    label: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    para: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
})
