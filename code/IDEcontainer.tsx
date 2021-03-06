import * as React from "react"
import {
    Frame,
    Scroll,
    Stack,
    PropertyControls,
    ControlType,
    Draggable,
} from "framer"
import {
    IDEswitch,
    IDEheader,
    propsBtn,
    propsPanel,
    onEditorClick,
    contextualMenu,
    syntax,
    scrollSyntax,
} from "./App"
import { IDETabs2 } from "./IDETabs2"
import { IDE } from "./canvas"
import { Syntax } from "./Syntax"
import { PropertiesPanelContainer } from "./PropertiesPanelContainer"
import { EditorMenu } from "./EditorMenu"

const mainWindow: React.CSSProperties = {
    background: "#F0F3F5",

    borderRadius: "0px",
    width: "100%",
}

const header: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: 36,
    boxShadow: "0px -5px 13px -10px rgba(0,0,0,0.19)",
}

const corner: React.CSSProperties = {
    position: "absolute",
    background: "transparent",
}

// Define type of property
export interface Props {
    height: number
    width: number
    minWidth: number
    minHeight: number
    top: number
}

export class IDEcontainer extends React.Component<Props> {
    windowStartPointY = 0
    panOffsetY = 0
    cornerStartY = 0
    cursorStyle
    maxY

    startY = this.props.top

    margin = 16

    state = {
        newY: 0,
        newWidth: this.props.width,
        newHeight: this.props.height,
        entered: false,
    }

    // Set default properties
    static defaultProps = {
        minWidth: 100,
        minHeight: 100,
        height: 800,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        minHeight: { type: ControlType.Number, title: "Min. Height" },
    }

    componentWillReceiveProps(props: Props) {
        if (props.height !== this.props.height) {
            this.setState({
                newHeight: Math.max(props.height, this.props.minHeight),
            })
        }

        if (props.height < this.props.minHeight) {
            this.setState({ newHeight: props.minHeight })
        }
    }

    cornerPanHandler = (side, e) => {
        if (side === "top") {
            this.panOffsetY = Math.min(
                e.screenY - this.cornerStartY,
                this.cornerStartHeight - this.props.minHeight
            )
            this.setState({
                newY: Math.min(
                    e.screenY - this.cornerStartY,
                    this.cornerStartHeight - this.props.minHeight
                ),
            })
            this.setState({
                newHeight: Math.max(
                    this.cornerStartHeight - this.panOffsetY,
                    this.props.minHeight
                ),
            })
            this.checkCursorHeight("ns-resize", "s-resize")
        }
    }

    cornerStartHeight
    cornerPanStartHandler = (side, e) => {
        if (side === "top") {
            console.log(e)
            this.cornerStartY = e.screenY - this.panOffsetY
            this.cornerStartHeight = this.state.newHeight + this.panOffsetY
            this.maxY =
                this.state.newY + this.cornerStartHeight - this.props.minHeight
        }
    }

    mouseEnterHandler = (defaultCursor, minCursor) => {
        this.checkCursor(defaultCursor, minCursor)
        this.setState({ entered: true })
    }

    mouseEnterHandlerHeight = (defaultCursor, minCursor) => {
        this.checkCursorHeight(defaultCursor, minCursor)
        this.setState({ entered: true })
    }

    mouseLeaveHandler = () => {
        document.body.style.cursor = "auto"
        this.setState({ entered: false })
    }

    panEndHandler = () => {
        if (this.state.entered === false) {
            document.body.style.cursor = "auto"
        }
    }

    checkCursor = (defaultStyle, minStyle) => {
        if (
            this.state.newWidth <= this.props.minWidth &&
            this.state.newHeight <= this.props.minHeight
        ) {
            document.body.style.cursor = minStyle
        } else {
            document.body.style.cursor = defaultStyle
        }
    }

    checkCursorHeight = (defaultStyle, minStyle) => {
        if (this.state.newHeight <= this.props.minHeight) {
            document.body.style.cursor = minStyle
        } else {
            document.body.style.cursor = defaultStyle
        }
    }

    render() {
        return (
            <Frame
                top={this.state.newY}
                height={this.state.newHeight}
                style={mainWindow}
                width={400}
                background={"#F0F3F5"}
                {...IDEswitch(null)}
            >
                <Frame
                    style={corner}
                    width={"100%"}
                    height={20}
                    left={0}
                    top={-10}
                    onPan={this.cornerPanHandler.bind(this, "top")}
                    onPanStart={this.cornerPanStartHandler.bind(this, "top")}
                    onPanEnd={this.panEndHandler}
                    onMouseEnter={this.mouseEnterHandlerHeight.bind(
                        this,
                        "ns-resize",
                        "s-resize"
                    )}
                    onMouseLeave={this.mouseLeaveHandler}
                />

                <div style={{ background: "#F0F3F5" }}>
                    <Scroll
                        background={"#F0F3F5"}
                        y={10}
                        width={"100%"}
                        height={"100%"}
                        {...scrollSyntax()}
                    >
                        <Frame
                            width={"100%"}
                            height={"max-contnet"}
                            background={"#F0F3F5"}
                        >
                            <Syntax {...syntax(null)} />
                        </Frame>
                    </Scroll>
                    <PropertiesPanelContainer
                        right={0}
                        top={0}
                        {...propsPanel(null)}
                    />
                </div>

                <Frame style={header} top={0} left={0}>
                    <IDETabs2 {...IDEheader(null)} />
                </Frame>
            </Frame>
        )
    }
}
