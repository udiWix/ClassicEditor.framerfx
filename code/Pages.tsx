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
                { fileName: "FAQ", fileType: "page" },
            ],
        },
        {
            section: "Content Manager Pages",
            items: [
                { fileName: "My Account Page", fileType: "page" },
                { fileName: "My Orders", fileType: "page" },
                { fileName: "My Adresses", fileType: "page" },
                { fileName: "My Wallet", fileType: "page" },
            ],
        },
        {
            section: "Lightboxes",
            items: [
                { fileName: "Login", fileType: "page" },
                { fileName: "add credits popup", fileType: "page" },
                { fileName: "idea", fileType: "page" },
                { fileName: "register completed", fileType: "page" },
                { fileName: "before rent", fileType: "page" },
            ],
        },
        {
            section: "Master",
            items: [{ fileName: "Site", fileType: "page" }],
        },
    ],
}

//////////////////////////////////////////////////////////////////////
