import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Header } from "./Header"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Search(props) {
    let tree = props.tree
    const [focus, setFocus] = React.useState()

    return (
        <div style={treeStyle}>
            <Header text={"Search"} />
        </div>
    )
}

const bg = "white"
const treeStyle: React.CSSProperties = {
    position: "relative",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    background: bg,
}

Search.defaultProps = {}

//////////////////////////////////////////////////////////////////////
