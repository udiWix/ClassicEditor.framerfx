import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Header } from "./Header"
import { Folder } from "./Folder"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function CodeFiles(props) {
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

CodeFiles.defaultProps = {
    tree: [
        {
            section: "Public",
            items: [{ fileName: "stripAPI.js", fileType: "js" }],
        },
        {
            section: "Backend",
            items: [
                { fileName: "home.jsw", fileType: "jsw" },
                { fileName: "settings.jsw", fileType: "jsw" },
                { fileName: "list.json", fileType: "json" },
                { fileName: "signin.jsw", fileType: "jsw" },
                { fileName: "router.js", fileType: "js" },
                { fileName: "print.jsw", fileType: "jsw" },
            ],
        },
        {
            section: "Packages",
            items: [
                { fileName: "momentjs", fileType: "npm" },
                { fileName: "twillio", fileType: "npm" },
                { fileName: "lodash", fileType: "npm" },
                { fileName: "googleMap", fileType: "npm" },
            ],
        },
    ],
}

//////////////////////////////////////////////////////////////////////
