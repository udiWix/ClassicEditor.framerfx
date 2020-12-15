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
                transition={{ ease: "easeOut", duration: 0.3 }}
                height={"100%"}
            >
                <AddPanel style={{ height: "100%" }} />
                <Frame
                    left={630}
                    width={50}
                    height={60}
                    onClick={props.callBack}
                    background={"transparent"}
                />
            </Frame>
        </div>
    )
}

AddPanel_.defaultProps = {
    left: -680,
    callBack: () => {},
}
