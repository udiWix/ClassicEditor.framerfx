import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { Home, About, Left_Bar_Main, Gallery, Left_Menu } from "./canvas"
import { IDEcontainer } from "./IDEcontainer"
import { EditorTools } from "./EditorTools"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Stage(props) {
    let page = props.page

    const selectPage = () => {
        switch (page) {
            case "Home": {
                return (
                    <Home
                        style={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                        }}
                    />
                )
                break
            }
            case "About": {
                return (
                    <About
                        style={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                        }}
                    />
                )
                break
            }
            case "Gallery": {
                return (
                    <Gallery
                        style={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                        }}
                    />
                )
                break
            }
        }
    }
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div
                style={{ position: "relative", height: "100%", width: "100%" }}
            >
                <Frame width={"100%"} height={"100%"} background={"white"}>
                    {selectPage()}
                </Frame>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        backgroundColor: "red",
                    }}
                >
                    <EditorTools style={{ height: "100%" }} />
                </div>
                <Frame
                    position={"absolute"}
                    height={400}
                    bottom={0}
                    width={"100%"}
                    background={"transparent"}
                    visible={props.visible}
                >
                    <IDEcontainer />
                </Frame>
            </div>
        </div>
    )
}

Stage.defaultProps = {
    page: "Home",
    visible: true,
}

//
// <div>
//     <Stack
//         width={"100%"}
//         height={"100%"}
//         direction="horizontal"
//         gap={0}
//     >
//         <Frame width={"100%"} height={"100%"} background={"white"}>
//             {selectPage()}
//         </Frame>
//     </Stack>
//     <div
//         style={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column-reverse",
//         }}
//     >

//         <div
//             style={{
//                 width: "100%",
//                 height: "400px",
//                 alignSelf: "flex-end",
//                 position: "relative",
//             }}
//         >
//             <IDEcontainer height={400} {...ideContainer(null)} />
//         </div>
//     </div>
// </div>
