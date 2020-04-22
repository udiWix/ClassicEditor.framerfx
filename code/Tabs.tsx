import * as React from "react"
import {
    Stack,
    Frame,
    useCycle,
    addPropertyControls,
    ControlType,
} from "framer"
import { IconBtn } from "./IconBtn"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Tabs(props) {
    return (
        <Stack direction="horizontal" gap={0} alignment="start">
            {props.icons.map((iconBtn, i) => (
                <IconBtn
                    key={i}
                    icon={iconBtn}
                    callback={props.setActive}
                    activeTab={props.active}
                />
            ))}
        </Stack>
    )
}

Tabs.defaultProps = {
    icons: ["add panel", "media", "view_carousel", "pages", "layers", "data"],
    setActive: () => {},
    active: null,
}

addPropertyControls(Tabs, {
    icons: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
    },
})
