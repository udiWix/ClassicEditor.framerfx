import * as React from "react"
import { Frame } from "framer"
import { addPanel, addBtn } from "./App"
import { ToolBar } from "./ToolBar"
import { AddPanel_ } from "./AddPanel_"
// Learn more: https://framer.com/api

export function EditorTools(props) {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <div
                style={{
                    width: "60px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                }}
            >
                <ToolBar style={{ height: "100%" }} {...addBtn()} />
            </div>
            <div
                style={{
                    position: "absolute",
                    width: 700,
                    top: 0,
                    left: 60,
                    height: "100%",
                }}
            >
                <AddPanel_ {...addPanel()} />
            </div>
        </div>
    )
}

EditorTools.defaultProps = {
    height: 200,
    width: 200,
    tint: "#09F",
}
