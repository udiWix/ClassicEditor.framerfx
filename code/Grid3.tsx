import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Stage } from "./Stage"
import { currentPage, onUpdateTabs } from "./App"
import PanelGroup from "react-panelgroup"
import { SiteTabs } from "./SiteTabs"
import { IDETabs2 } from "./IDETabs2"
import { IDE, MiniTools } from "./canvas"
import { LeftTree } from "./LeftTree"
import { DataView } from "./DataView"
import { Layers } from "./Layers"
import { Tools } from "./Tools"
import { Syntax } from "./Syntax"

export function Grid3(props) {
    const [active, setActive] = React.useState("code")

    const escFunction = useCallback(event => {
        if (
            (event.ctrlKey && event.keyCode === 67) ||
            event.keyCode === "123"
        ) {
            props.setLayout()
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)

        return () => {
            document.removeEventListener("keydown", escFunction, false)
        }
    }, [])

    const setPanel = st => {
        if (st === "code") {
            return <LeftTree style={menu} />
        } else if (st === "database") {
            return <DataView />
        } else if (st === "layers") {
            return <Layers />
        } else if (st === "tools") {
            return <Tools />
        }
    }

    const applyLayout = ly => {
        switch (ly) {
            case "stage": {
                return (
                    <div style={{ width: "100%", height: "100%" }}>
                        <Stage {...currentPage()} />
                    </div>
                )
                break
            }
            case "left": {
                return (
                    <PanelGroup
                        borderColor="#E4E4E4"
                        panelColor="white"
                        panelWidths={[
                            { size: 56, resize: "fixed" },
                            { size: 180, minSize: 100, resize: "dynamic" },
                            { size: 500, minSize: 200, resize: "dynamic" },
                            { minSize: 200, resize: "dynamic" },
                        ]}
                    >
                        <div>
                            <SiteTabs callback={setActive} />
                        </div>
                        <div style={menu}>{setPanel(active)}</div>
                        <div>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    position: "absolute",
                                }}
                            >
                                <Frame
                                    width={"100%"}
                                    height={"100%"}
                                    background={"transparent"}
                                >
                                    <Syntax />
                                </Frame>
                                <IDETabs2
                                    {...onUpdateTabs()}
                                    style={{ zIndex: 10 }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                            }}
                        >
                            <Frame
                                style={{
                                    position: "relative",
                                    height: "48px",
                                    width: "auto",
                                }}
                            >
                                <MiniTools style={{ width: "100%" }} />
                            </Frame>
                            <Stage
                                height={"100%"}
                                width={"100%"}
                                {...currentPage()}
                            />
                        </div>
                    </PanelGroup>
                )
            }
            case "full": {
                return (
                    <PanelGroup
                        borderColor="#E4E4E4"
                        panelColor="white"
                        panelWidths={[
                            { size: 56, resize: "fixed" },
                            { size: 180, minSize: 100, resize: "dynamic" },
                            { minSize: 200, resize: "dynamic" },
                        ]}
                    >
                        <div>
                            <SiteTabs callback={setActive} />
                        </div>
                        <div style={menu}>{setPanel(active)}</div>
                        <div>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    position: "absolute",
                                }}
                            >
                                <Frame
                                    width={"100%"}
                                    height={"100%"}
                                    background={"transparent"}
                                >
                                    <Syntax />
                                </Frame>
                                <IDETabs2
                                    data={props.IDETabs}
                                    full={true}
                                    onTabFocusChange={props.onTabFocusChange}
                                />
                            </div>
                        </div>
                    </PanelGroup>
                )
            }
            case "bottom": {
                return (
                    <PanelGroup
                        borderColor="#E4E4E4"
                        panelColor="white"
                        panelWidths={[
                            { size: 56, resize: "fixed" },
                            { size: 180, minSize: 100, resize: "dynamic" },
                            { size: 500, minSize: 200, resize: "dynamic" },
                            { minSize: 200, resize: "dynamic" },
                        ]}
                    >
                        <div>
                            <SiteTabs callback={setActive} />
                        </div>
                        <div style={menu}>{setPanel(active)}</div>
                        <div
                            style={{
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                            }}
                        >
                            <Stage
                                height={"100%"}
                                width={"100%"}
                                {...currentPage()}
                            />
                        </div>
                    </PanelGroup>
                )
            }
        }
    }

    return (
        <Frame width={"100%"} height={"100%"} background={"#F4F4F4"}>
            {applyLayout(props.layout)}
        </Frame>
    )
}

Grid3.defaultProps = {
    layout: "bottom",
    onTabFocusChange: x => {},
    setLayout: () => {},
}
const menu: React.CSSProperties = {
    width: "inherit",
}
// Learn more: https://framer.com/api/property-controls/
