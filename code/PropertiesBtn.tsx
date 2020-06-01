import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icon } from "./Icon"
import { PropsIcon } from "./PropsIcon"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesBtn(props) {
    // const [focus, setFocus] = React.useState(props.focused)

    // const onTap = () => {
    //     props.onClick()
    //     setFocus(!focus)
    // }
    const color = props.disabled
        ? "#D5D5D5"
        : props.focused
        ? "#3899EC"
        : "#1F3344"

    const lineColor = props.disabled
        ? "white"
        : props.focused
        ? "#3899EC"
        : "white"

    return (
        <Frame
            onClick={props.toggleFocus}
            width={36}
            height={36}
            background={"transparent"}
            style={{
                position: "relative",
                float: "right",
                cursor: "pointer",
                padding: "11px",
                top: "-38px",
                marginRight: "5px",
            }}
        >
            <Frame background="transparent" width={17} height={17} center>
                <PropsIcon tint={color} />
            </Frame>
            <Frame
                width={36}
                height={3}
                top={34}
                left={0}
                background={lineColor}
            />
        </Frame>
    )
}

PropertiesBtn.defaultProps = {
    focused: false,
    toggleFocus: () => {},
    disabled: false,
}

// Learn more: https://framer.com/api/property-controls/
