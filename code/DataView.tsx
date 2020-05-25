import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Header } from "./Header"
import { Folder } from "./Folder"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function DataView(props) {
    let tree = props.tree
    const [focus, setFocus] = React.useState()

    return (
        <div style={treeStyle}>
            <Header text={"Database"} />
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

DataView.defaultProps = {
    tree: [
        {
            section: "Members",
            items: [
                { fileName: "Badges", fileType: "data" },
                { fileName: "PrivateMembersData", fileType: "data" },
            ],
        },
        {
            section: "Users",
            items: [
                {
                    fileName: "PublicMemberProfiles",
                    fileType: "data",
                },
            ],
        },
        {
            section: "Bookings",
            items: [
                { fileName: "Schedule", fileType: "data" },
                { fileName: "Services", fileType: "data" },
                { fileName: "Staff", fileType: "data" },
            ],
        },
    ],
}

//////////////////////////////////////////////////////////////////////
