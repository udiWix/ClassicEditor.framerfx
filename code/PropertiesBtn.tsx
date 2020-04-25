import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icon } from "./Icon"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesBtn(props) {
    const [focus, setFocus] = React.useState(props.focused)

    const onTap = () => {
        props.onClick()
        setFocus(!focus)
    }

    return (
        <Frame
            onTap={onTap}
            width={36}
            height={36}
            background={focus ? "#3899EC" : "transparent"}
            style={{
                position: "relative",
                float: "right",
                cursor: "pointer",
                padding: "11px",
                top: "-36px",
                marginRight: "5px",
            }}
        >
            <Icon
                set={"feather"}
                icon={"hash"}
                width={16}
                height={16}
                color={focus ? "white" : "#4D4D4D"}
            />
        </Frame>
    )
}

PropertiesBtn.defaultProps = {
    focused: false,
    onClick: () => {},
}

// Learn more: https://framer.com/api/property-controls/
