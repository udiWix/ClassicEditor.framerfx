import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Header } from "./canvas"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function MasterApp(props) {
    return (
        <Frame width={"100%"} height={"100%"} background={"#F4F4F4"}>
            <Frame>
                
                <Header/>
            </Frame>
        </Frame>
    )
}

MasterApp.defaultProps = {}
