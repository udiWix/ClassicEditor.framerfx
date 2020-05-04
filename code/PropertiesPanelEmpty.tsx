import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { PropsEmpty } from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanelEmpty(props) {
    return (
        <Stack height={"100%"} width={"100%"} paddingTop={30}>
            <PropsEmpty />
        </Stack>
    )
}

PropertiesPanelEmpty.defaultProps = {}

// Learn more: https://framer.com/api/property-controls/
