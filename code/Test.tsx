import * as React from "react"
import { Frame, Stack, PropertyControls, ControlType } from "framer"
import SyntaxHighlighter from "react-syntax-highlighter"
import languages from "./languages"
import themes from "./themes"

interface Props {
    customStyle: object
    focusMode: boolean
    focusedLines: string
    language: string
    padding: number
    paddingBottom: number
    paddingPerSide: boolean
    paddingLeft: number
    paddingRight: number
    paddingTop: number
    showLineNumbers: boolean
    instructionsSnippet: string
    style: string
    width: number
    height: number
}

export class SyntaxHighlighter extends React.Component<Partial<Props>> {
    focusedLines: Array<number>
    dimmedLineStyle: Object
    instructionsSnippet: String

    static defaultProps = {
        language: "Auto",
        focusMode: false,
        focusedLines: "1, 6-9",
        padding: 0,
        paddingBottom: 0,
        paddingPerSide: false,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        showLineNumbers: false,
        style: "Default Style",
        width: 600,
        height: 80,
    }

    static propertyControls: PropertyControls<Props> = {
        style: {
            type: ControlType.Enum,
            title: "Theme",
            options: Object.keys(themes),
        },
        language: {
            type: ControlType.Enum,
            title: "Language",
            options: languages,
        },
        padding: Stack.propertyControls.padding,
        showLineNumbers: {
            type: ControlType.Boolean,
            disabled: "Hide",
            enabled: "Show",
            title: "Line numbers",
        },
        focusMode: {
            type: ControlType.Boolean,
            disabled: "Disable",
            enabled: "Enable",
            title: "Focus mode",
        },
        focusedLines: {
            type: ControlType.String,
            title: "Focused lines",
            hidden(props) {
                return props.focusMode === false
            },
        },
    }

    constructor(props: Props) {
        super(props)

        this.focusedLines = []
        this.dimmedLineStyle = { opacity: 0.45 }
        this.instructionsSnippet = `// SyntaxHighlighter for Framer X
// 1. Create a text layer and the code snippet you want to highlight.
// 2. Wrap it in a Frame (⌘ + ↵).
// 3. Link the Frame to this component.
// 4. Hit Preview (⌘ + P) to see the result live!`

        this._setLineNumberStyle = this._setLineNumberStyle.bind(this)
        this._setLineProps = this._setLineProps.bind(this)
        this._parseFocusedLines = this._parseFocusedLines.bind(this)
    }

    _getCodeSnippetFromChildren(children) {
        return React.Children.map(children, child => {
            // Preview
            if (
                child.props.contentState &&
                child.props.contentState.blocks &&
                child.props.contentState.blocks.length
            ) {
                return child.props.contentState.blocks
                    .map(b => b.text)
                    .join("\n")
                // Canvas
            } else if (
                child.props.contentState &&
                child.props.contentState.blockMap
            ) {
                return child.props.contentState.blockMap
                    .map(b => b.text)
                    .join("\n")
                // Nested children
            } else if (
                child.props &&
                React.Children.count(child.props.children)
            ) {
                return this._getCodeSnippetFromChildren(child.props.children)
                // No code snippet found
            } else {
                return null
            }
        })
    }

    _parseFocusedLines() {
        const ranges = this.props.focusedLines.split(",")

        const lines = ranges.reduce((prev, range) => {
            const parsedRange = range.includes("-")
                ? range.split("-").map(Number) // Range
                : [Number(range), Number(range)] // Single line

            if (parsedRange.includes(NaN)) {
                return prev
            }

            const startLine = parsedRange[0]
            const endLine = parsedRange[1]

            const rangeLines = Array.apply(
                null,
                Array(endLine - startLine + 1)
            ).map((item, idx) => idx + startLine)

            return prev.concat(rangeLines)
        }, [])

        return lines
    }

    _setLineNumberStyle(line) {
        if (!this.focusedLines.includes(line)) {
            return this.dimmedLineStyle
        }
    }

    _setLineProps(line) {
        if (!this.focusedLines.includes(line)) {
            return { style: this.dimmedLineStyle }
        }
    }

    render() {
        const {
            children,
            width,
            height,
            style,
            language,
            focusMode,
            focusedLines,
            showLineNumbers,
            padding,
            paddingBottom,
            paddingLeft,
            paddingPerSide,
            paddingRight,
            paddingTop,
        } = this.props

        const paddings = {
            paddingTop: paddingPerSide ? paddingTop : padding,
            paddingLeft: paddingPerSide ? paddingLeft : padding,
            paddingRight: paddingPerSide ? paddingRight : padding,
            paddingBottom: paddingPerSide ? paddingBottom : padding,
        }

        const customStyle = {
            ...paddings,
            width: width,
            height: height,
            margin: 0,
        }

        const codeSnippet = this._getCodeSnippetFromChildren(children)

        this.focusedLines = this._parseFocusedLines()

        return (
            <div style={{ width: width, height: height }}>
                <SyntaxHighlighter
                    customStyle={customStyle}
                    language={language}
                    showLineNumbers={showLineNumbers}
                    wrapLines={focusMode}
                    lineNumberStyle={this._setLineNumberStyle}
                    lineProps={this._setLineProps}
                    style={
                        require(`react-syntax-highlighter/dist/styles/hljs/${themes[style]}`)
                            .default
                    }
                >
                    {codeSnippet.length
                        ? codeSnippet.join()
                        : this.instructionsSnippet}
                </SyntaxHighlighter>
            </div>
        )
    }
}
