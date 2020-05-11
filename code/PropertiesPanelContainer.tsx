import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { PropertiesPanel } from "./PropertiesPanel"
import { PropertiesPanelEmpty } from "./PropertiesPanelEmpty"
import { PopOverContainer } from "./PopOverContainer"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanelContainer(props) {
    const content = () => {
        if (props.comp === "") {
            return <PropertiesPanelEmpty />
        } else {
            return <PropertiesPanel comp={props.comp} />
        }
    }

    const vis = () => {
        if (props.tab === "code" || props.focused === false) {
            return false
        } else {
            return true
        }
    }

    return (
        <Stack
            height={"100%"}
            width={258}
            top={36}
            right={0}
            visible={vis()}
            background={"#EAEEF4"}
            style={{ borderLeft: "1px solid #C2CAD5", padding: "0px 12px" }}
        >
            {content()}
        </Stack>
    )
}

PropertiesPanelContainer.defaultProps = {
    height: "100%",
    width: 258,
    focused: null,
    comp: null,
    tab: "pages",
}
