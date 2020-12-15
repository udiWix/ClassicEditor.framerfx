import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { Home } from "./canvas"
import { About } from "./canvas"
import { Gallery, Left_Menu } from "./canvas"
import { IDEcontainer } from "./IDEcontainer"
import { ideContainer } from "./App"
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
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column-reverse",
            }}
        >
            <Frame width={"100%"} height={"100%"} background={"white"}>
                {selectPage()}
            </Frame>

            <div
                style={{
                    width: "100%",
                    height: "400px",
                    alignSelf: "flex-end",
                    position: "relative",
                }}
            >
                <div />
                <IDEcontainer height={400} />
            </div>
        </div>
    )
}

Stage.defaultProps = {
    page: "Home.js",
}

//
