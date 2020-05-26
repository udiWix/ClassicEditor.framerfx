import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import SyntaxHighlighter from "react-syntax-highlighter"
import { corvid } from "./styles/hljs"
import { onEditorClick } from "./App"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Syntax(props) {
    const [menu, setMenu] = React.useState(false)

    return (
        <div style={{ paddingTop: 25 }} {...onEditorClick(null)}>
            <SyntaxHighlighter
                showLineNumbers
                language="javascript"
                style={corvid}
            >
                {props.codeString}
            </SyntaxHighlighter>
        </div>
    )
}

Syntax.defaultProps = {
    codeString: "",
}

// Learn more: https://framer.com/api/property-controls/
