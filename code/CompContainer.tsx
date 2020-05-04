import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { compClick } from "./App"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function CompContainer(props) {
    const compStyle = { position: "relative" }
    const [active, setActive] = React.useState()
    const activate = v => {
        setActive(v)
    }

    return (
        <Frame height={"100%"} width={"100%"} background={"transparent"}>
            {React.Children.map(
                props.children,
                (child: React.ReactElement<any>, i) => (
                    // Overwrite the default "position: absolute"

                    <Stack
                        style={{
                            display: "inline-block",
                            position: "relative",
                            width: "auto",
                            height: "auto",
                        }}
                        top={100}
                        drag
                        dragMomentum={false}
                    >
                        <CompRaper
                            label={props._label[i]}
                            id={"#" + props._id[i]}
                            active={active}
                            callback={activate}
                            {...compClick(null)}
                        >
                            {React.cloneElement(child, { style: compStyle })}
                        </CompRaper>
                    </Stack>
                )
            )}
        </Frame>
    )
}

CompContainer.defaultProps = {
    _label: ["Button", "Text"],
    _id: ["Button1", "Text1"],
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(CompContainer, {
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
    _label: {
        title: "Label",
        type: ControlType.Array,
        defaultValue: ["Button", "Text"],
        propertyControl: {
            type: ControlType.String,
        },
    },
    _id: {
        title: "ID's",
        type: ControlType.Array,
        defaultValue: ["Button1", "Text1"],
        propertyControl: {
            type: ControlType.String,
        },
    },
})

export function CompRaper(props) {
    const isActive = props.id === props.active ? true : false

    const onclick = () => {
        props.callback(props.id)
        props.setComp(props.id)
    }

    return (
        <div style={raper} onClick={onclick}>
            <Stack
                alignment="start"
                gap={2}
                style={{
                    position: "relative",
                    width: "auto",
                    height: "auto",
                }}
            >
                <Stack
                    height={16}
                    direction={"horizontal"}
                    gap={0}
                    left={0}
                    alignment="start"
                >
                    <Frame
                        style={{
                            background: "#3899EC",
                            color: "white",
                            padding: "3px 5px",
                            borderRadius: "0px",
                            width: "auto",
                            height: "auto",
                            position: "relative",
                            left: "0px",
                        }}
                        opacity={isActive ? 1 : 0}
                    >
                        {props.label}
                    </Frame>
                    <Frame
                        style={{
                            background: "#F0F3F5",
                            color: "#162D3D",
                            padding: "3px 5px",
                            borderRadius: "0px",
                            width: "auto",
                            height: "auto",
                            position: "relative",
                            left: "0px",
                        }}
                        opacity={isActive ? 1 : 0}
                    >
                        {props.id}
                    </Frame>
                </Stack>
                <div style={isActive ? activeComp : idleComp}>
                    {props.children}
                </div>
            </Stack>
        </div>
    )
}

CompRaper.defaultProps = {
    label: "test",
    id: "test",
    active: null,
    callback: () => {},
    setComp: () => {},
}

const raper: React.CSSProperties = {
    width: "auto",
    height: "auto",
}
const activeComp: React.CSSProperties = {
    display: "inline-block",
    position: "relative",
    border: "1px solid #09F",
    width: "max-content",
    height: "max-content",
}
const idleComp: React.CSSProperties = {
    display: "inline-block",
    position: "relative",
    width: "max-content",
    height: "max-content",
}
