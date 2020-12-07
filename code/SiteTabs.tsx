import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"

import { url } from "framer/resource"
import { IconBtn } from "./IconBtn"
import { ToolsBtn } from "./ToolsBtn"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function SiteTabs(props) {
    const [active, setActive] = React.useState("pages")

    const activate = (v) => {
        setActive(v)
        props.callback(v)
        props.updateTab(v)
    }

    return (
        <div>
            <Stack
                direction="vertical"
                padding={0}
                width={56}
                gap={-1}
                background={"#F0F3F5"}
                height={"100%"}
            >
                <IconBtn
                    icon={"pages"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
                <IconBtn
                    icon={"code"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
                <IconBtn
                    icon={"search"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
                <IconBtn
                    icon={"database"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
                <IconBtn
                    icon={"help"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
            </Stack>
        </div>
    )
}

SiteTabs.defaultProps = {
    iconSize: 18,
    callback: () => {},
    updateTab: () => {},
}

// Learn more: https://framer.com/api/property-controls/
