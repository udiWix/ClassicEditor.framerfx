import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { _Tools } from "./canvas"
import { Header } from "./Header"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Tools(props) {
    return (
        <div style={treeStyle}>
            <Header text={"Tools"} />
            <_Tools width={"100%"} />
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

Tools.defaultProps = {}

//////////////////////////////////////////////////////////////////////
