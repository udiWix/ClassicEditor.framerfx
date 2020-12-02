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
            <AddPanel
                style={{
                    height: "100%",
                    position: "absolute",
                    left: l,
                    transition: "all 0.5s ease",
                }}
            />
        </div>
    )
}

AddPanel_.defaultProps = {
    left: -680,
}
