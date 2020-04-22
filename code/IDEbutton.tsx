import * as React from "react"
import { Frame, useCycle } from "framer"
import { Icon } from "./Icon"
import { toggleFullIDE } from "./App"

export function IDEbutton(props) {
    const [full, setFull] = React.useState(props.full)
    let lastLayout

    const onTap = () => {
        let ly = full ? props.layout : "full"
        props.setLayout(ly)
        setFull(!full)
    }

    return (
        <Frame
            onTap={onTap}
            width={26}
            height={26}
            style={{
                position: "relative",
                float: "right",
                cursor: "pointer",
                background: "transparent",
                padding: "4px 4px",
                top: "-30px",
            }}
        >
            <Icon
                set={"feather"}
                icon={full ? "minimize-2" : "maximize-2"}
                width={"14px"}
                height={"14px"}
                color={"#4D4D4D"}
            />
        </Frame>
    )
}

IDEbutton.defaultProps = {
    setLayout: () => {},
    layout: "none",
    full: false,
}
