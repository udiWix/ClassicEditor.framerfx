import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { Icon } from "./Icon"

// Open Preview: Command + P
// Learn more: https://framer.com/api
let base = 36

export function LayoutPicker(props) {
    let inState = props.layout
    const [active, setActive] = React.useState(inState)

    const callback = v => {
        if (v) {
            setActive(v)
            props.setLayout(v)
        }
        setTimeout(
            function() {
                props.isDropdown(false)
            }.bind(this),
            1000
        )
    }

    return (
        <Frame background={"transparent"} width={36 * 3}>
            <Frame
                background={"white"}
                height={base}
                width={36 * 3}
                borderRadius={3}
                overflow="hidden"
                shadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
            >
                <Stack direction={"horizontal"} gap={0} height={base}>
                    <LayoutButton
                        icon={"sidebar"}
                        value={"left"}
                        activeBtn={active}
                        callback={callback}
                    />
                    <LayoutButton
                        icon={"credit-card"}
                        value={"bottom"}
                        activeBtn={active}
                        callback={callback}
                    />
                    <LayoutButton
                        icon={"filter_none"}
                        set={"material"}
                        value={"detach"}
                        activeBtn={active}
                        callback={callback}
                    />
                </Stack>
            </Frame>
        </Frame>
    )
}

LayoutPicker.defaultProps = {
    isDropdown: () => {},
    layout: String,
    setLayout: () => {},
}

export function LayoutButton(props) {
    const [hover, setHover] = React.useState(false)
    const isSelected = false
    const [selected, setSelected] = React.useState(false)
    const isActive = props.activeBtn === props.value ? true : false
    const bgColor = isActive ? "#3899EC" : "white"
    const iconColor = isActive ? "white" : hover ? "#3899EC" : "black"

    const MouseOver = e => {
        setHover(true)
    }
    const MouseLeave = e => {
        setHover(false)
    }
    const onTap = () => {
        props.callback(props.value)
    }

    return (
        <Stack
            height={base}
            width={base}
            direction="vertical"
            alignment="center"
            distribution="space-evenly"
            background={bgColor}
            onTap={onTap}
            onMouseOver={MouseOver}
            onMouseLeave={MouseLeave}
        >
            <Icon
                icon={props.icon}
                set={props.set}
                height={18}
                width={18}
                color={iconColor}
            />
        </Stack>
    )
}

LayoutButton.defaultProps = {
    icon: null,
    set: "feather",
    value: null,
    activeBtn: "left",
    callback: () => {},
}
