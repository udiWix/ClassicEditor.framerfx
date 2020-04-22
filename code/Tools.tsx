import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Tools(props) {
    let tree = props.tree

    return (
        <div style={treeStyle}>
            <Frame width={"100%"} height={"36px"} style={HeaderStyle}>
                Tools
            </Frame>
            {tree.map((item, i) => {
                return (
                    <Folder section={item.section} files={item.items} key={i} />
                )
            })}
        </div>
    )
}

export function Folder(props) {
    return (
        <div>
            <Section>
                <Frame style={labelStyle}>{props.section}</Frame>
                <Frame
                    height={"14px"}
                    width={"14px"}
                    position={"relative"}
                    background={"transparent"}
                >
                    <Icon
                        icon={"chevron-right"}
                        set={"feather"}
                        height={"14px"}
                        width={"14px"}
                        color={"#878787"}
                    />
                </Frame>
            </Section>
        </div>
    )
}

const treeStyle: React.CSSProperties = {
    position: "relative",
    flexDirection: "column",
    justifyContent: "start",
    width: "100%",
    height: "100%",
    background: "#F4F4F4",
}

const HeaderStyle: React.CSSProperties = {
    fontFamily:
        "HelveticaNeueW01-55Ligh, HelveticaNeueW02-55Ligh, HelveticaNeueW10-55Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "14px",
    textAlign: "left",
    background: "#F4F4F4",
    justifyContent: "left",
    paddingLeft: "10px",
    color: "#162D3D",
    borderBottom: "1px solid #DEDEDE",
    position: "relative",
}

const labelStyle: React.CSSProperties = {
    marginLeft: "0px",
    position: "relative",
    background: "transparent",
    fontFamily:
        "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "10px",
    width: "120px",
}

const Section = styled.div`
    text-align: left;
    background: #F4F4F4;
    color: #162D3D;
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    &:hover{
        background: #E6E6E6;
    }
`

const lineStyle: React.CSSProperties = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
}

Tools.defaultProps = {
    tree: [
        {
            section: "Release Manager",
        },
        {
            section: "Site Monitoring",
        },
        {
            section: "Secrets Manager",
        },
    ],
}

Folder.defaultProps = {
    section: "Folder",
}
