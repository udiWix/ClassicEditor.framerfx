import * as React from "react"
import { Frame, Stack, ControlType, addPropertyControls } from "framer"
import { Icon } from "./Icon"
import { TabIcon } from "./TabIcon"
import ReactTooltip from "react-tooltip"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function IconBtn(props) {
    const [color, setColor] = React.useState("#F0F3F5")
    // console.log("props", JSON.stringify(props.hover, null, 2))

    const iconColor =
        props.activeTab === props.icon && color === "#F0F3F5"
            ? "#fff"
            : "#F0F3F5"

    const onTap = () => {
        if (props.activeTab != props.icon) {
            setColor(iconColor)
        }
        props.callback(props.icon)
    }
    return (
        <Frame
            style={style}
            onTap={onTap}
            background={iconColor}
            data-tip={props.icon}
            data-type="light"
            data-border={true}
            data-border-color={"#D8E0E3"}
            data-effect={"float"}
            data-offset="{ 'left': -10}"
            data-place="right"
        >
            <ReactTooltip />
            <TabIcon name={props.icon} />
        </Frame>
    )
}

export function findIcon(icon) {
    switch (icon) {
        case "pages": {
            return "file-minus"
            break
        }
        case "code": {
            return "file"
            break
        }
        case "database": {
            return "database"
            break
        }

        case "tools": {
            return "list"
            break
        }
        case "search": {
            return "search"
            break
        }
        case "tools": {
            return "tools"
            break
        }
        case "layers": {
            return "layers"
            break
        }
    }
}

const style: React.CSSProperties = {
    width: "56px",
    height: "47px",
    marginTop: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
    textTransform: "capitalize",
}

addPropertyControls(IconBtn, {
    icon: { type: ControlType.String, title: "Icon" },
})

IconBtn.defaultProps = {
    color: "#162D3D",
    set: "material",
    width: 18,
    height: 18,
    callback: () => {},
    reactIcon: false,
    icon: "code",
}
