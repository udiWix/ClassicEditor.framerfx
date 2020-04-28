import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { compClick } from "./App"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Comp(props) {
    let activeView = null
    const [hover, setHover] = React.useState(false)
    const [dropDown, setDropdown] = React.useState(false)
    const compStyle = hover ? { border: "1px solid #09F" } : {}
    const compName = props.text

    React.Children.forEach(props.children, child => {
        activeView = React.cloneElement(child, { style: compStyle })
    })

    const onEnter = e => {
        setHover(true)
    }

    const onLeave = e => {
        setHover(false)
    }
    const id = "#" + props.text
    return (
        <Frame style={comp} drag dragMomentum={false}>
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
                    gap={0}
                >
                    <Frame
                        style={{
                            background: "#F0F3F5",
                            color: "#162D3D",
                            padding: "3px 5px",
                            borderRadius: "0px",
                            width: "auto",
                            height: "auto",
                            position: "relative",
                            left: "0px",
                        }}
                    >
                        {id}
                    </Frame>
                    {activeView}
                    <CompRaper text={id} {...compClick()} />
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

export function CompRaper(props) {
    const n = props.text
    const onClick = e => {
        props.setSelection(n)
    }
    return <div style={raper} onClick={onClick}></div>
}

CompRaper.defaultProps = {
    text: "text",
    setSelection: () => {},
}

const raper: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
}
