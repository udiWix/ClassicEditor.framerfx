import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { Input } from "./Input"
import { Checkbox } from "../../../wix-base-ui"
import "../../../wix-base-ui/dist/style.css"
import { Handler } from "./Handler"
import { handlerClick } from "./App"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanel(props) {
    const [pop, setPop] = React.useState(false)
    const [active, setActive] = React.useState()

    const v = props.comp.substr(1)

    const eventShort = event => {
        switch (event) {
            case "onClick":
                return "_click"
                break
            case "onDbClick":
                return "_dbClick"
                break
            case "onMouseIn":
                return "_mouseIn"
                break
            case "onMouseOut":
                return "_mouseOut"
                break
            case "onViewPortEnter":
                return "_vpEnter"
                break
            case "onViewPortLeave":
                return "_vpLeave"
                break
        }
    }

    const events = props.events.map((event, index) => {
        return (
            <Handler
                key={index}
                component={v}
                eventName={eventShort(event)}
                label={event + "( )"}
                {...handlerClick(null)}
            />
        )
    })

    return (
        <div>
            <Stack height={"100%"} width={"100%"}>
                <Stack
                    height={40}
                    width={"100%"}
                    background={"transparent"}
                    direction="horizontal"
                    gap={5}
                    style={{
                        borderBottom: "1px solid #D6E1E8",
                    }}
                >
                    <Frame
                        width={12}
                        height={12}
                        background={"transparent"}
                        style={label}
                        top={2}
                    >
                        ID
                    </Frame>
                    <Frame height={40} width={195} background="transparent">
                        <Input value={v} />
                    </Frame>
                    <Frame
                        width={12}
                        height={12}
                        style={link}
                        background="transparent"
                        top={2}
                    >
                        API
                    </Frame>
                </Stack>
                <Stack
                    height={66}
                    width={"100%"}
                    background={"transparent"}
                    direction="vertical"
                    alignment="start"
                    style={{
                        borderBottom: "1px solid #D6E1E8",
                    }}
                >
                    <span style={label}>On Load Value</span>
                    <Stack height={40} direction="horizontal">
                        <Frame height={30} width={90} background="transparent">
                            <Checkbox
                                label={"Hidden"}
                                labelAfterSymbol={true}
                            />
                        </Frame>
                        <Frame height={30} width={120} background="transparent">
                            <Checkbox
                                label={"Collapsed"}
                                labelAfterSymbol={true}
                            />
                        </Frame>
                    </Stack>
                </Stack>
                <Frame height={280} width={"100%"} background={"transparent"}>
                    <span style={label}>Event Handlers</span>
                    <Stack top={20} alignment={"start"} gap={28}>
                        {events}
                    </Stack>
                </Frame>
            </Stack>
        </div>
    )
}

PropertiesPanel.defaultProps = {
    comp: "#text1",
    height: "100%",
    width: 258,

    events: [
        "onClick",
        "onDbClick",
        "onMouseIn",
        "onMouseOut",
        "onViewPortEnter",
        "onViewPortLeave",
    ],
}

const label: React.CSSProperties = {
    fontFamily:
        "HelveticaNeueW01-65Medium, HelveticaNeueW02-65Medium, HelveticaNeueW10-65Medium, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    color: "#7A92A5",
    textAlign: "left",
    width: "max-content",
    whiteSpace: "nowrap",
}
const link: React.CSSProperties = {
    fontFamily:
        "HelveticaNeueW01-65Medium, HelveticaNeueW02-65Medium, HelveticaNeueW10-65Medium, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif",
    fontSize: "12px",
    color: "#3899EC",
    textAlign: "left",
}
