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
            <Frame background="transparent" width={23} height={18} center>
                <PropsIcon tint={props.focused ? "#3899EC" : "#1F3344"} />
            </Frame>
            <Frame
                width={36}
                height={3}
                top={34}
                left={0}
                background={props.focused ? "#3899EC" : "white"}
            />
        </Frame>
    )
}

PropertiesBtn.defaultProps = {
    focused: false,
    toggleFocus: () => {},
}

// Learn more: https://framer.com/api/property-controls/
