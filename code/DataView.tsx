import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function DataView(props) {
    let tree = props.tree

    return (
        <div style={treeStyle}>
            <Frame width={"100%"} height={"36px"} style={HeaderStyle}>
                Data Collections
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
    let files = props.files
    const [open, setOpen] = React.useState(true)

    const onTap = () => {
        const folderState = !open
        setOpen(folderState)
    }

    return (
        <div>
            <Section onClick={onTap}>
                <Icon
                    icon={"credit-card"}
                    set={"feather"}
                    height={"14px"}
                    width={"14px"}
                    color={"#162D3D"}
                />
                <Frame style={labelStyle}>{props.section}</Frame>
                <Frame
                    height={"14px"}
                    width={"14px"}
                    position={"relative"}
                    background={"transparent"}
                    visible={false}
                >
                    <Icon
                        icon={"more-vertical"}
                        set={"feather"}
                        height={"14px"}
                        width={"14px"}
                        color={"#878787"}
                        visible={false}
                    />
                </Frame>
            </Section>
            {open
                ? files.map((file, index) => (
                      <File key={index}>
                          <Icon
                              icon={file.icon}
                              set={file.set}
                              height={"14px"}
                              width={"14px"}
                              color={"#162D3D"}
                          />
                          <Frame style={labelStyle}>{file.label}</Frame>
                      </File>
                  ))
                : null}
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
    marginLeft: "5px",
    background: "transparent",
    fontFamily:
        "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "20px",
}

const Section = styled.div`
    text-align: left;
    background: #F4F4F4;
    color: #162D3D;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
    padding-left: 5px;
    &:hover{
        background: #E6E6E6;
    }
`

const File = styled.div`
    position: relative;
    width:100%;
    padding-left:30px;
    height: 30px;
    font-family:HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #162D3D;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    background: #F4F4F4;
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

DataView.defaultProps = {
    tree: [
        {
            section: "Insights",
            items: [
                { label: "Title", icon: "text_fields", set: "material" },
                { label: "Quote", icon: "text_fields", set: "material" },
                { label: "Sentiment", icon: "link", set: "material" },
            ],
        },
        {
            section: "Tags",
            items: [
                { label: "Title", icon: "text_fields", set: "material" },
                { label: "Insight", icon: "link", set: "material" },
                { label: "count", icon: "hash", set: "feather" },
            ],
        },
    ],
}

Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
}
