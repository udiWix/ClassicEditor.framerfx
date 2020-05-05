import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Header(props) {
    return (
        <Frame width={"100%"} height={36} style={HeaderStyle}>
            {props.text}
        </Frame>
    )
}

Header.defaultProps = {
    text: "Header",
}

const HeaderStyle: React.CSSProperties = {
    fontFamily:
        "HelveticaNeueW01-75Bold, HelveticaNeueW02-75Bold, HelveticaNeueW10-75Bold, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    textAlign: "left",
    background: "white",
    justifyContent: "left",
    color: "#2B5672",
    borderBottom: "1px solid #DEDEDE",
    position: "relative",
    paddingLeft: "10px",
}
