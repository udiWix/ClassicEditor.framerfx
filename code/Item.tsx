import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"
import { useEffect, useRef } from "react"
import useDoubleClick from "use-double-click"
import { IDEicon } from "./IDEicon"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Item(props) {
    let label = props.label
    let current = props.current
    let icon = props.type === "page" ? false : true
    let pageIcon =
        props.type === "page" && props.page === props.label ? true : false
    const buttonRef = useRef()

    useDoubleClick({
        onSingleClick: e => {
            props.switchPage(label)
        },
        onDoubleClick: e => {
            props.doubleSwitchPage(label)
        },
        ref: buttonRef,
        latency: 300,
    })
    const render = () => {
        if (current === label) {
            return (
                <FileFocus ref={buttonRef}>
                    <IDEicon name={props.type} visible={icon} />
                    <div>{label}</div>
                </FileFocus>
            )
        } else {
            return (
                <File ref={buttonRef}>
                    <IDEicon name={props.type} visible={icon} />
                    <div>{label}</div>
                </File>
            )
        }
    }

    return (
        <div style={{ height: "30px", width: "100%", background: "green" }}>
            <div
                style={{ width: "100%", height: "30px", position: "absolute" }}
            >
                {render()}
                <Frame style={style} visible={pageIcon}>
                    <IDEicon name={"page"} />
                </Frame>
            </div>
        </div>
    )
}

Item.defaultProps = {
    label: "item",
    type: "jsw",
    switchPage: () => {},
    doubleSwitchPage: () => {},
    current: null,
    page: null,
}
const style: React.CSSProperties = {
    position: "absolute",
    top: "5px",
    left: "4px",
    width: "18px",
    height: "20px",
    background: "transparent",
}
const File = styled.div`
    position: relative;
    width:100%;
    padding-left:25px;
    height: 30px;
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #2B5672;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    background: white;
    &:hover{
        background: #EAF7FF;
    }
`

const FileFocus = styled.div`
    position: relative;
    width:100%;
    padding-left:25px;
    height: 30px;
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #2B5672;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    background: #D3EDFF;
`
