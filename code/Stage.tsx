import * as React from "react"
import { Frame, addPropertyControls, ControlType, Stack } from "framer"
import { Home } from "./canvas"
import { About } from "./canvas"
import { Gallery, Left_Menu } from "./canvas"
import { IDEcontainer } from "./IDEcontainer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Stage(props) {
    let page = props.page

    const selectPage = () => {
        switch (page) {
            case "Home.js": {
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
            case "About.js": {
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
            case "Gallery.js": {
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
            <Frame width={"100%"} height={"100%"}>
                {selectPage()}
            </Frame>
            <div
                style={{
                    position: "absolute",
                    top: "30px",
                    left: "15px",
                }}
            >
                <Left_Menu />
            </div>
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    alignSelf: "flex-end",
                    position: "relative",
                }}
            >
                <IDEcontainer height={400} />
            </div>
        </div>
    )
}

Stage.defaultProps = {
    page: "Home.js",
}

//
