import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Header } from "./Header"
import { Folder } from "./Folder"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Pages(props) {
    let tree = props.tree
    const [focus, setFocus] = React.useState()

    return (
        <div style={treeStyle}>
            <Header text={"Site Pages"} />
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

Pages.defaultProps = {
    tree: [
        {
            section: "Pages",
            items: [
                { fileName: "Home", fileType: "page" },
                { fileName: "About", fileType: "page" },
                { fileName: "Gallery", fileType: "page" },
            ],
        },
        {
            section: "Content Manager Pages",
            items: [{ fileName: "Team", fileType: "page" }],
        },
        {
            section: "Lightboxes",
            items: [{ fileName: "Login", fileType: "page" }],
        },
        {
            section: "Master",
            items: [{ fileName: "Site", fileType: "page" }],
        },
    ],
}

//////////////////////////////////////////////////////////////////////
