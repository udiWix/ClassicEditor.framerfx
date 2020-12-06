import * as React from "react"
import { Frame } from "framer"
import { Left_Bar_Main } from "./canvas"
// Learn more: https://framer.com/api

export function ToolBar(props) {
    return (
        <div style={{ height: "100%", width: 60, background: "white" }}>
            <Left_Bar_Main style={{ height: "100%" }} />
            <Frame
                left={0}
                top={0}
                size={42}
                background="white"
                radius="50%"
                x={9}
                y={18}
                shadow="0px 4px 4px rgb(0,0,0,0.15)"
                border="1px solid #E0E0E0"
                onClick={props.callback}
            >
                <div style={{ position: "absolute", top: 11, left: 11 }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                    >
                        <path
                            d="M 9 0 C 10.105 0 11 0.895 11 2 L 11 7 L 16 7 C 17.105 7 18 7.895 18 9 C 18 10.105 17.105 11 16 11 L 11 11 L 11 16 C 11 17.105 10.105 18 9 18 C 7.895 18 7 17.105 7 16 L 7 10.999 L 2 11 C 0.895 11 0 10.105 0 9 C 0 7.895 0.895 7 2 7 L 7 6.999 L 7 2 C 7 0.895 7.895 0 9 0 Z"
                            fill="rgba(14,15,17,1)"
                        ></path>
                    </svg>
                </div>
            </Frame>
        </div>
    )
}

ToolBar.defaultProps = {
    callback: () => {},
}
