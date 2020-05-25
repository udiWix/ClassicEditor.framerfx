import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Icon } from "./Icon"
import styled from "styled-components"
import { pageSwitch } from "./App"
import { Item } from "./Item"
// Open Preview: Command + P
// Learn more: https://framer.com/api

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
                    set={"material"}
                />
                <Frame style={labelStyle}>{props.section}</Frame>
            </Section>
            {open
                ? files.map((file, index) => (
                      <Item
                          label={file.fileName}
                          type={file.fileType}
                          key={index}
                          {...pageSwitch(null)}
                      />
                  ))
                : null}
        </div>
    )
}

Folder.defaultProps = {
    files: [{ fileName: "file1", fileType: "page" }],
    section: "Folder",
    switchPage: () => {},
}

const labelStyle: React.CSSProperties = {
    marginLeft: "10px",
    background: "transparent",
    fontFamily:
        "HelveticaNeueW01-65Medium, HelveticaNeueW02-65Medium, HelveticaNeueW10-65Medium, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    justifyContent: "left",
    paddingLeft: "10px",
}

const Section = styled.div`
    text-align: left;
    background: #F0F3F5;
    color: #2B5672;
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 5px;
    &:hover{
        background: #F2F2F2;
    }
`
