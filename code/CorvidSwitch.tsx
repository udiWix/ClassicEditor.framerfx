import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import styled, { ThemeProvider } from "styled-components"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function CorvidSwitch(props) {
    return (
        <Frame
            width={280}
            height={48}
            background={"white"}
            style={{ borderRight: "1px solid #EEEEEE" }}
        >
            <Stack
                direction={"horizontal"}
                alignment={"center"}
                distribution={"center"}
                height={48}
                width={280}
            >
                <ToggleLabel>Design</ToggleLabel>
                <ToggleLabel>Code</ToggleLabel>
            </Stack>
        </Frame>
    )
}

CorvidSwitch.defaultProps = {}

const ToggleLabel = styled.div`
        font-family:
        HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
       font-size: 13px; 
       color: #162D3D;
       text-align: center;
       width: 80px;
       padding: auto;
       height: 49px;
       line-height: 49px;
       cursor: pointer;
       &:hover {
            color: #3899EC;
       }
`
