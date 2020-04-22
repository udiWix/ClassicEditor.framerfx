import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { PropertiesPanel } from "./PropertiesPanel"
import { compClick } from "./App"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Comp(props) {
    let activeView = null
    const [hover, setHover] = React.useState(false)
    const [dropDown, setDropdown] = React.useState(false)
    const compStyle = hover ? { border: "1px solid #09F" } : {}
    const node = useRef(null)

    React.Children.forEach(props.children, child => {
        activeView = React.cloneElement(child, { style: compStyle })
    })

    const onContex = e => {
        e.preventDefault()
        setDropdown(!dropDown)
    }

    const onEnter = e => {
        setHover(true)
    }

    const onLeave = e => {
        setHover(false)
    }

    return (
        <Frame
            ref={node}
            style={comp}
            drag
            dragMomentum={false}
            {...compClick()}
        >
            <Stack
                style={{ position: "relative", width: "auto", height: "auto" }}
            >
                <Stack
                    style={{
                        position: "relative",
                        width: "auto",
                        height: "auto",
                    }}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    direction="vertical"
                    alignment="start"
                    gap={5}
                >
                    <Frame
                        style={{
                            background: "#2076FD",
                            color: "white",
                            padding: "5px 8px",
                            borderRadius: "3px",
                            width: "auto",
                            height: "auto",
                            position: "relative",
                            left: "0px",
                        }}
                    >
                        {props.text}
                    </Frame>
                    {activeView}
                </Stack>
            </Stack>
        </Frame>
    )
}

addPropertyControls(Comp, {
    children: {
        type: ControlType.ComponentInstance,
    },
    text: { type: ControlType.String, title: "ID" },
})

Comp.defaultProps = {
    view: "view",
    text: "text",
}

const comp: React.CSSProperties = {
    position: "relative",
    width: "auto",
    height: "auto",
    background: "transparent",
}
