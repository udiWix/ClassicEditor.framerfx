import * as React from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function CompContainer(props) {
    const compStyle = { border: "1px solid #09F" }

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
                                >
                                    {props._label[i]}
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
                                >
                                    {props._id[i]}
                                </Frame>
                            </Stack>
                            {React.cloneElement(child, { style: compStyle })}
                        </Stack>
                    </Stack>
                )
            )}
        </Frame>
    )
}

CompContainer.defaultProps = {
    _label: ["Button", "Text"],
    _id: ["#Button1", "#Text1"],
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
        defaultValue: ["#Button1", "#Text1"],
        propertyControl: {
            type: ControlType.String,
        },
    },
})
