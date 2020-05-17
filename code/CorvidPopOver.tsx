import * as React from "react"
import { Frame } from "framer"
import { TooltipBackground } from "./canvas"
import { Button } from "../../../wix-base-ui"
import "../../../wix-base-ui/dist/style.css"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function CorvidPopOver(props) {
    return (
        <Frame background={"transparent"} onMouseLeave={props.onMouseLeave}>
            <TooltipBackground />
            <Frame
                style={{ width: "auto", height: "auto" }}
                background={"transparent"}
                top={140}
                left={20}
            >
                <Button className="btn-md" onClick={props.onClick}>
                    Turn on Dev Mode
                </Button>
            </Frame>
        </Frame>
    )
}

CorvidPopOver.defaultProps = {
    onMouseLeave: () => {},
    onClick: () => {},
}

// Learn more: https://framer.com/api/property-controls/
