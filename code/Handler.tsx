import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import styled, { ThemeProvider } from "styled-components"
import { Input } from "./Input"
import {AddBtn} from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api
const Link = styled.div`
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #3899EC;
    &:hover {

    }
`

export function Handler(props) {
    return (
        <Stack height={24} width={"100%"} direction={"horizontal"}>
            <Link>{props.label}</Link>
            <Frame height={40} width={120} background="transparent">
                <Input value={props.component + props.event} />
            </Frame>
            <Frame height={16} width={16} top={2} background="transparent">
              <AddBtn/>
            </Frame>
        </Stack>
    )
}

Handler.defaultProps = {
    label: "onClick()",
    event:"_click",
    component:"text1"
}

// Learn more: https://framer.com/api/property-controls/
