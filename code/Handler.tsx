import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import styled, { ThemeProvider } from "styled-components"
import { Input } from "./Input"
import { AddBtn, Flashlight, Garbage } from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api
const Link = styled.div`
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #3899EC;
    cursor: pointer;
    &:hover {
        text-decoration:underline;
    }
`

const Label = styled.div`
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #2B5672;
`

const FunLabel = styled.div`
    font-family:HelveticaNeueW01-55Roman, HelveticaNeueW02-55Roman, HelveticaNeueW10-55Roman, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:12px;
    color: #d0427d;
    cursor: pointer;
    &:hover {
        text-decoration:underline;
    }
`

export function Handler(props) {
    const [active, setActive] = React.useState(props.active)
    const [inputField, showInputField] = React.useState(false)
    const [addDisplay, setDisplay] = React.useState(false)
    const [del, showDel] = React.useState(false)

    const onClickLink = () => {
        setDisplay(!addDisplay)
        showInputField(true)
    }
    const onAddClick = () => {
        setActive(false)
        setDisplay(false)
        showDel(true)
    }
    return (
        <div style={{ width: "265px" }}>
            <Stack
                height={24}
                width={250}
                gap={3}
                direction={"horizontal"}
                distribution="start"
            >
                <EventName
                    label={props.label}
                    isActive={active}
                    onClick={onClickLink}
                />

                <FuncName
                    show={inputField}
                    isActive={!del}
                    value={props.component + props.eventName}
                />
                <Frame
                    height={16}
                    width={16}
                    top={2}
                    background="transparent"
                    visible={addDisplay}
                >
                    <AddBtn
                        onClick={onAddClick}
                        style={{ cursor: "pointer" }}
                    />
                </Frame>
            </Stack>
            <Frame
                height={24}
                width={50}
                right={0}
                top={4}
                background={"transparent"}
                visible={del}
            >
                <Flashlight right={55} />
                <Garbage />
            </Frame>
        </div>
    )
}

Handler.defaultProps = {
    label: "onClick()",
    eventName: "_click",
    component: "text1",
    active: true,
}

// Learn more: https://framer.com/api/property-controls/
export function EventName(props) {
    const funName = props.isActive ? (
        <Link onClick={props.onClick}>{props.label}</Link>
    ) : (
        <Label>{props.label}</Label>
    )

    return <div>{funName}</div>
}
EventName.defaultProps = {
    label: "onClick()",
    onClick: () => {},
    isActive: true,
}

export function FuncName(props) {
    const [isInput, setInput] = React.useState(props.isActive)

    const item = props.isActive ? (
        <Input value={props.value} />
    ) : (
        <Frame
            height={20}
            width={100}
            top={14}
            left={3}
            background={"transparent"}
        >
            <FunLabel>{props.value}</FunLabel>
        </Frame>
    )

    return (
        <Frame
            height={40}
            width={105}
            background="transparent"
            visible={props.show}
        >
            {item}
        </Frame>
    )
}
FuncName.defaultProps = {
    value: "text1_click",
    isActive: true,
    show: false,
}

// <Frame height={40} width={105} background="transparent">
//     <Input value={props.component + props.event} />
// </Frame>
