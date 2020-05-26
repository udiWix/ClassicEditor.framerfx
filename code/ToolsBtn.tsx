import * as React from "react"
import { Frame, Stack, ControlType, addPropertyControls } from "framer"
import { AiOutlineTool } from "react-icons/ai"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function ToolsBtn(props) {
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
        <Frame style={style} onTap={onTap} background={iconColor}>
            <AiOutlineTool color={"#162D3D"} size={"2.2em"} />
        </Frame>
    )
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
}

ToolsBtn.defaultProps = {
    color: "#162D3D",
    set: "material",
    width: 18,
    height: 18,
    callback: () => {},
}
