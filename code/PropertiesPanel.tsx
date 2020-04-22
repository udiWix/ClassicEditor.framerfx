import * as React from "react"
import { useEffect, useRef } from "react"
import { Frame, Stack, addPropertyControls, ControlType } from "framer"
import { Triangle } from "./canvas"
import styled from "styled-components"
import Checkbox from "@material-ui/core/Checkbox"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
        },
    },
})

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropertiesPanel(props) {
    let events = props.events
    const Item = styled.div`
    width: 100%;
    height: 34px;
    position: relative;
    background: transparent;
    border-bottom: 1px solid #2E2D2D;
    font-family:
        HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,Helvetica Neue,Helvetica,Arial,,hiragino kaku gothic pro,'sans-serif';
    font-size: 11px;
    font-weight: 400;
    text-align: left;
    color: #E0E0E0;
    justify-content: left;
    padding: 0px 15px;
    cursor: pointer;
    line-height:34px;
     &:hover {
         background: #2E2D2D;
         }
`
    const node = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            setTimeout(
                function() {
                    props.callback()
                }.bind(this),
                500
            )
            return
        }
        props.callback()
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <Frame background="transparent" visible={props.visible} ref={node}>
            <Frame
                shadow="0px 0px 5px rgb(0,0,0,0.5)"
                y={15}
                style={{
                    fontSize: 16,
                    fontWeight: 600,
                    background: "#434242",
                    borderRadius: "3px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    height: "auto",
                    overflow: "hidden",
                }}
            >
                <Frame style={id}>
                    ID: {props.compId}
                    <div style={{ marginTop: "5px" }}>
                        <ThemeProvider theme={theme}>
                            <Checkbox size={"small"} disableRipple={true} />
                        </ThemeProvider>
                        Hidden on load
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <Checkbox size={"small"} disableRipple={true} />
                        </ThemeProvider>
                        Collapsed on load
                    </div>
                </Frame>
                {events.map((event, i) => {
                    return <Item> {event}</Item>
                })}
            </Frame>
            {props.triangle ? (
                <Triangle
                    center="x"
                    style={{ position: "absolute", top: "0" }}
                />
            ) : null}
        </Frame>
    )
}

PropertiesPanel.defaultProps = {
    callback: () => {},
    height: 128,
    width: 240,
    triangle: true,
    compId: "comp",
    visible: true,
    events: [
        "onViewportEnter",
        "onViewportLeave",
        "onMouseIn",
        "onMouseOut",
        "onClick",
        "onDblClick",
    ],
}

const id: React.CSSProperties = {
    position: "relative",
    height: "auto",
    width: "100%",
    fontFamily:
        "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,Helvetica Neue,Helvetica,Arial,,hiragino kaku gothic pro,'sans-serif'",
    fontSize: "11px",
    color: "#E0E0E0",
    textAlign: "left",
    padding: "15px 15px 5px 15px",
    backgroundColor: "transparent",
    border: "1px solid #2E2D2D",
    display: "block",
}

// const item: React.CSSProperties = {
//     width: "100%",
//     height: "34px",
//     position: "relative",
//     background: "transparent",
//     borderBottom: "1px solid #EBEBEB",
//     fontFamily:
//         "HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,Helvetica Neue,Helvetica,Arial,,hiragino kaku gothic pro,'sans-serif'",
//     fontSize: "11px",
//     fontWeight: 400,
//     textAlign: "left",
//     color: "#162D3D",
//     justifyContent: "left",
//     padding: "0px 15px",
//     cursor: "pointer",
// }
