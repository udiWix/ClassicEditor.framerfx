import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function LeftTree(props) {
    let tree = props.tree
    const [focus, setFocus] = React.useState()

    return (
        <div style={treeStyle}>
            <Frame width={"100%"} height={"36px"} style={HeaderStyle}>
                <Stack
                    direction="horizontal"
                    padding={10}
                    height={36}
                    width={"100%"}
                    gap={10}
                    distribution="space-between"
                >
                    <Frame height={36} width={70} background={"transparent"}>
                        Code Files
                    </Frame>
                    <Icon
                        icon={"search"}
                        set={"feather"}
                        height={16}
                        width={16}
                    ></Icon>
                </Stack>
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
                    icon={open ? "keyboard_arrow_down" : "keyboard_arrow_right"}
                    height={18}
                    width={18}
                    color={"#162D3D"}
                />
                <Frame style={labelStyle}>{props.section}</Frame>
            </Section>
            {open
                ? files.map((file, index) => (
                      <Item label={file} key={index} {...pageSwitch()} />
                  ))
                : null}
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

const HeaderStyle: React.CSSProperties = {
    fontFamily:
        "HelveticaNeueW01-55Ligh, HelveticaNeueW02-55Ligh, HelveticaNeueW10-55Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "14px",
    textAlign: "left",
    background: bg,
    justifyContent: "left",
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
    paddingLeft: "10px",
}

const Section = styled.div`
    text-align: left;
    background: bg
    color: #162D3D;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 0px;
    &:hover{
        background: #F2F2F2;
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
    background: white;
    &:hover{
        background: #F2F2F2;
    }
`

const FileFocus = styled.div`
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
    background: #dceff4;
`

const lineStyle: React.CSSProperties = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
}

LeftTree.defaultProps = {
    tree: [
        {
            section: "Pages",
            items: ["Home.js", "Gallery.js", "About.js"],
        },
        {
            section: "Public",
            items: ["utils.js"],
        },
        {
            section: "Backend",
            items: ["routers.js"],
        },
    ],
}

Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
    switchPage: () => {},
}

export function Item(props) {
    let label = props.label
    let current = props.current

    const onClick = e => {
        props.switchPage(label)
    }
    const render = () => {
        if (current === label) {
            return (
                <FileFocus onClick={onClick}>
                    <Frame style={lineStyle} />
                    {label}
                </FileFocus>
            )
        } else {
            return (
                <File onClick={onClick}>
                    <Frame style={lineStyle} />
                    {label}
                </File>
            )
        }
    }

    return render()
}

Item.defaultProps = {
    label: "item",
    switchPage: () => {},
    current: null,
}
