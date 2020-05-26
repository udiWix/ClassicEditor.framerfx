import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { PropertiesPanel } from "./PropertiesPanel"
import { PropertiesPanelEmpty } from "./PropertiesPanelEmpty"
import { PopOverContainer } from "./PopOverContainer"
import { popOver } from "./App"
import { motion, AnimatePresence } from "framer-motion"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanelContainer(props) {
    const [pop, setPop] = React.useState(false)

    const content = () => {
        if (props.comp === "") {
            return <PropertiesPanelEmpty />
        } else {
            return <PropertiesPanel comp={props.comp} width={258} />
        }
    }

    const vis = () => {
        if (props.focused === false) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            <Frame
                height={"100%"}
                width={258}
                top={36}
                right={0}
                visible={vis()}
                background={"#F0F3F5"}
                style={{ borderLeft: "1px solid #C2CAD5", padding: "0px 12px" }}
            >
                {content()}
                <PopOverContainer left={-100} top={100} {...popOver(null)} />
            </Frame>
        </div>
    )
}

PropertiesPanelContainer.defaultProps = {
    height: "100%",
    width: 258,
    focused: null,
    comp: null,
    tab: "pages",
}
