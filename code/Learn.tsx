import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { _Learn } from "./canvas"
import { Header } from "./Header"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Learn(props) {
    return (
        <div style={treeStyle}>
            <Header text={"Learn"} />
            <_Learn width={"100%"} />
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

Learn.defaultProps = {}

//////////////////////////////////////////////////////////////////////
