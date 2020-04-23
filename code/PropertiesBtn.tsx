import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icon } from "./Icon"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesBtn(props) {
    const onTap = () => {
        props.onClick()
    }

    return (
        <Frame
            onTap={onTap}
            width={36}
            height={36}
            background={props.focused ? "#3899EC" : "transparent"}
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
                color={props.focused ? "white" : "#4D4D4D"}
            />
        </Frame>
    )
}

PropertiesBtn.defaultProps = {
    focused: false,
    onClick: () => {},
}

// Learn more: https://framer.com/api/property-controls/
