import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import styled from "styled-components"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Item(props) {
    let label = props.label
    let current = props.current

    const onClick = e => {
        props.switchPage(label)
    }
    const render = () => {
        if (current === label) {
            return <FileFocus onClick={onClick}>{label}</FileFocus>
        } else {
            return <File onClick={onClick}>{label}</File>
        }
    }

    return render()
}

Item.defaultProps = {
    label: "item",
    switchPage: () => {},
    current: null,
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
