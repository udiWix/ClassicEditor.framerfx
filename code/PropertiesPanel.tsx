import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanel(props) {
    const { focused, ...rest } = props

    return (
        <Stack
            {...rest}
            top={36}
            visible={focused}
            height={"100%"}
            background={"#EAEEF4"}
            style={{ borderLeft: "1px solid #C2CAD5", padding: "0px 12px" }}
        >
            <Stack
                height={40}
                width={"100%"}
                background={"transparent"}
                direction="horizontal"
                style={{
                    borderBottom: "1px solid #D6E1E8",
                }}
            >
                <span style={label}>ID</span>
            </Stack>
            <Stack
                height={66}
                width={"100%"}
                background={"transparent"}
                direction="vertical"
                alignment="start"
                style={{
                    borderBottom: "1px solid #D6E1E8",
                }}
            >
                <span style={label}>On Load Value</span>
            </Stack>
            <Frame height={280} width={"100%"} background={"transparent"}>
                <span style={label}>Event Handlers</span>
            </Frame>
        </Stack>
    )
}

PropertiesPanel.defaultProps = {
    height: "100%",
    width: 258,
    focused: true,
}

const label: React.CSSProperties = {
    background: "transparent",
    fontFamily:
        "HelveticaNeueW01-65Medium, HelveticaNeueW02-65Medium, HelveticaNeueW10-65Medium, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    color: "#7A92A5",
    textAlign: "left",
}
