import * as React from "react"
import { Stack, Frame, addPropertyControls, ControlType } from "framer"

import { LeftTree } from "./LeftTree"
import { DataView } from "./DataView"
import { Layers } from "./Layers"
import { Tools } from "./Tools"
import { url } from "framer/resource"
import { IconBtn } from "./IconBtn"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function SiteTabs(props) {
    const [active, setActive] = React.useState("code")

    const activate = v => {
        setActive(v)
        props.callback(v)
    }

    return (
        <div>
            <Stack direction="vertical" padding={0} width={56} gap={-1}>
                <IconBtn
                    icon={"code"}
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
                    icon={"layers"}
                    set={"feather"}
                    width={props.iconSize}
                    height={props.iconSize}
                    callback={activate}
                    activeTab={active}
                />
                <IconBtn
                    icon={"tools"}
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
    iconSize: 20,
    callback: () => {},
}

// Learn more: https://framer.com/api/property-controls/
