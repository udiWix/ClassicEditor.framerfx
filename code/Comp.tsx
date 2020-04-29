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

    // const onEnter = e => {
    //     setHover(true)
    // }

    // const onLeave = e => {
    //     clicked ? null : setHover(false)
    // }

    // const onClick = e => {
    //     setClicked(!clicked)
    // }

    const callBack = selected => {
        setSelected(selected)
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
                        visible={selected}
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
    const isSelected = () => {
        if (props.comp == props.text) {
            return true
        } else {
            return false
        }
    }

    const onClick = e => {
        props.setSelection(props.text)
        console.log(props.comp)
        props.callback(isSelected())
    }

    return <div style={raper} onClick={onClick}></div>
}

CompRaper.defaultProps = {
    text: "text",
    comp: "",
    callback: () => {},
    setSelection: () => {},
}

const raper: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
}
