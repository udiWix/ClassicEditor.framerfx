import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import { Icon } from "./Icon"
import styled, { ThemeProvider } from "styled-components"
import { PropertiesPanel } from "./PropertiesPanel"
import { useEffect, useState, useRef } from "react"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
export function MenuBtn(props) {
    return (
        <div>
            <Frame
                height={"14px"}
                width={"14px"}
                position={"relative"}
                background={"transparent"}
                style={{ marginRight: "5px" }}
                visible={props.visible}
            >
                <Icon
                    icon={"more-horizontal"}
                    set={"feather"}
                    height={"14px"}
                    width={"14px"}
                    color={"#404040"}
                />
            </Frame>
        </div>
    )
}
MenuBtn.defaultProps = {
    visible: false,
}
export function Item(props) {
    const [showIcon, setIcon] = React.useState(false)
    const [panel, showPanel] = React.useState(false)
    const [panelHover, setPanelHover] = React.useState(false)
    const node = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            showPanel(false)
            return
        }
        showPanel(false)
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    const MouseOver = e => {
        e.stopPropagation()
        setIcon(true)
    }
    const MouseOut = e => {
        e.stopPropagation()
        setIcon(false)
    }
    const iconClick = e => {
        e.stopPropagation()
        showPanel(true)
    }

    return (
        <div ref={node}>
            <ThemeProvider theme={props.theme}>
                <Section
                    onClick={props.onTap}
                    onMouseOver={MouseOver}
                    onMouseLeave={MouseOut}
                >
                    <Icon
                        icon={props.icon}
                        set={props.set}
                        height={"14px"}
                        width={"14px"}
                        color={"#162D3D"}
                    />
                    <Frame style={labelStyle}>{props.label}</Frame>
                    <div onClick={iconClick}>
                        <MenuBtn visible={showIcon} />
                        {panel ? (
                            <div style={ppanel}>
                                <PropertiesPanel
                                    compId={props.label}
                                    triangle={false}
                                />
                            </div>
                        ) : null}
                    </div>
                </Section>
            </ThemeProvider>
        </div>
    )
}

export function Layers(props) {
    let tree = props.tree

    return (
        <div style={treeStyle}>
            <Frame width={"100%"} height={"36px"} style={HeaderStyle}>
                Page Layers
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
            <Item
                theme={ul}
                onTap={onTap}
                icon={"square"}
                label={props.section}
            />

            {open
                ? files.map((file, index) => (
                      <Item
                          key={index}
                          icon={file.icon}
                          set={file.set}
                          label={file.label}
                          li={true}
                          theme={list}
                      />
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
    padding-left: ${props => props.theme.paddingLeft};
    &:hover{
        background: #E6E6E6;
    }
`

const ul = {
    paddingLeft: "5px",
}
const list = {
    paddingLeft: "30px",
}

const lineStyle: React.CSSProperties = {
    background: "#DEDEDE",
    height: "36px",
    width: "1px",
    left: "12px",
    top: "0px",
}
const li: React.CSSProperties = {
    paddingLeft: "30px",
}

Layers.defaultProps = {
    tree: [
        {
            section: "#Strip1",
            items: [
                { label: "#image1", icon: "image", set: "feather" },
                { label: "#text1", icon: "type", set: "feather" },
                { label: "#button1", icon: "crop_7_5", set: "material" },
            ],
        },
    ],
}

Folder.defaultProps = {
    files: ["file1", "file2", "file3"],
    section: "Folder",
}

Item.defaultProps = {
    onTap: () => {},
    label: "Label",
    icon: "type",
    set: "feather",
    theme: ul,
}

const ppanel: React.CSSProperties = {
    position: "fixed",
    zIndex: 100,
    left: 200,
}
