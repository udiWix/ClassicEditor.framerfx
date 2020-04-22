import * as React from "react"
import {
    Frame,
    addPropertyControls,
    PropertyControls,
    ControlType,
    RenderTarget,
} from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Panels(props) {
    let activeView = null

    React.Children.forEach(props.children, child => {
        if (child.props.name === props.view) {
            const animation =
                RenderTarget.current() === RenderTarget.canvas
                    ? {}
                    : { animate: { x: 0 }, initial: { x: -200 } }

            activeView = React.cloneElement(child, {
                height: "100%",
                ...animation,
                transition: "easeOut",
            })
        }
    })

    return (
        <Frame width={320} height={"100%"} background={"transparent"}>
            {activeView}
        </Frame>
    )
}

addPropertyControls(Panels, {
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
})

Panels.defaultProps = {
    view: "view",
}
