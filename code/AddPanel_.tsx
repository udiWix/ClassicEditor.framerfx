import * as React from "react"
import { Frame } from "framer"
import { AddPanel } from "./canvas"
// Learn more: https://framer.com/api

export function AddPanel_(props) {
    let l = props.left
    return (
        <div
            style={{
                position: "absolute",
                height: "100%",
                width: "700px",
                overflow: "hidden",
            }}
        >
            <Frame
                animate={{ left: props.left }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                left={-680}
                height={"100%"}
            >
                <AddPanel style={{ height: "100%" }} />
                <Frame
                    width={40}
                    height={40}
                    x={630}
                    y={15}
                    background={"transparent"}
                    onClick={props.callback}
                />
            </Frame>
        </div>
    )
}

AddPanel_.defaultProps = {
    left: 0,
    callback: () => {},
}
