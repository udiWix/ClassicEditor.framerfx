import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { compClick } from "./App"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Comp(props) {
    let activeView = null
    const [hover, setHover] = React.useState(false)
    // const [clicked, setClicked] = React.useState(false)
    const [selected, setSelected] = React.useState(false)
    const compStyle = selected ? { border: "1px solid #09F" } : {}

    React.Children.forEach(props.children, child => {
        activeView = React.cloneElement(child, { style: compStyle })
    })

    const callBack = v => {
        setSelected(v)
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
                    // onMouseEnter={onEnter}
                    // onMouseLeave={onLeave}
                    direction="vertical"
                    alignment="start"
                    gap={0}
                >
                    <Frame
                        opacity={selected ? 1 : 0}
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
                    <CompRaper
                        text={props.text}
                        callback={callBack}
                        {...compClick(null)}
                    />
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
//////////////////////////////////////////////////////////////////////
export function CompRaper(props) {
    const [selected, setSelected] = React.useState(false)
    const onClick = e => {
        props.setSelection(props.text)
        props.callback(true)
    }
    const node = useRef()

    const handleClick = e => {
        props.callback(false)
        props.setSelection("")
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return <div style={raper} onClick={onClick} ref={node}></div>
}

CompRaper.defaultProps = {
    text: "text",
    callback: () => {},
    setSelection: () => {},
}

const raper: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
}
