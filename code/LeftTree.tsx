import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Header } from "./Header"
import { Folder } from "./Folder"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function LeftTree(props) {
    let tree = props.tree
    const [focus, setFocus] = React.useState()

    return (
        <div style={treeStyle}>
            <Header text={"Code Files"} />
            {tree.map((item, i) => {
                return (
                    <Folder section={item.section} files={item.items} key={i} />
                )
            })}
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

LeftTree.defaultProps = {
    tree: [
        {
            section: "Public",
            items: ["stripAPI.js"],
        },
        {
            section: "Backend",
            items: [
                "home.jsw",
                "settings.jsw",
                "signin.jsw",
                "user.jsw",
                "print.jsw",
            ],
        },
        {
            section: "Packages",
            items: ["momentjs", "twillio", "lodash", "googleMap"],
        },
    ],
}

//////////////////////////////////////////////////////////////////////
