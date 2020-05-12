import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs, monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { EditorMenu } from "./EditorMenu"
import { onEditorClick, contextualMenu } from "./App"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Syntax(props) {
    const [menu, setMenu] = React.useState(false)

    return (
        <div style={{paddingTop: 25 }} {...onEditorClick(null)}>
            
            <SyntaxHighlighter
                showLineNumbers
                language="javascript"
                style={monoBlue}
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
