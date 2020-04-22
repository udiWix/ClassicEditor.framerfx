import * as React from "react"
import { Frame, Stack, ControlType, addPropertyControls } from "framer"
import { Icon } from "./Icon"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function IconBtn(props) {
    const [color, setColor] = React.useState("#000")
    // console.log("props", JSON.stringify(props.hover, null, 2))

    const iconColor =
        props.activeTab === props.icon && color === "#000" ? "#3899EC" : "#000"

    const onTap = () => {
        if (props.activeTab != props.icon) {
            setColor(iconColor)
        }
        props.callback(props.icon)
    }
    return (
        <Frame style={style} onTap={onTap}>
            <Icon
                icon={findIcon(props.icon)}
                color={iconColor}
                set={props.set}
                width={props.width}
                height={props.height}
            />
        </Frame>
    )
}

export function findIcon(icon) {
    switch (icon) {
        case "add panel": {
            return "add_box"
            break
        }
        case "media": {
            return "cloud_upload"
            break
        }
        case "app market": {
            return "view_carousel"
            break
        }
        case "pages": {
            return "description"
            break
        }
        case "layers": {
            return "layers"
            break
        }
        case "data": {
            return "storage"
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
        case "collection": {
            return "credit-card"
            break
        }
        case "tools": {
            return "list"
            break
        }
    }
}

const style: React.CSSProperties = {
    width: "56px",
    height: "47px",
    marginTop: "1px",

    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    cursor: "pointer",
}

addPropertyControls(IconBtn, {
    icon: { type: ControlType.String, title: "Icon" },
})

IconBtn.defaultProps = {
    color: "#000",
    set: "material",
    width: 24,
    height: 24,
    callback: () => {},
}
