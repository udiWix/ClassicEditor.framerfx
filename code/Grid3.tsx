import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import { Frame, Scroll, addPropertyControls, ControlType } from "framer"
import { Stage } from "./Stage"
import {
    currentPage,
    onUpdateTabs,
    propsBtn,
    propsPanel,
    syntax,
    IDEtabs,
    siteTabs,
} from "./App"
import PanelGroup from "react-panelgroup"
import { SiteTabs } from "./SiteTabs"
import { IDETabs2 } from "./IDETabs2"
import { IDE, Left_Bar_Main, Layers } from "./canvas"
import { CodeFiles } from "./CodeFiles"
import { DataView } from "./DataView"
import { Pages } from "./Pages"
import { Tools } from "./Tools"
import { Syntax } from "./Syntax"
import { Search } from "./Search"
import { Learn } from "./Learn"
import { PropertiesPanelContainer } from "./PropertiesPanelContainer"

export function Grid3(props) {
    const [active, setActive] = React.useState("pages")

    // const escFunction = useCallback(event => {
    //     if (
    //         (event.ctrlKey && event.keyCode === 67) ||
    //         event.keyCode === "123"
    //     ) {
    //         props.setLayout()
    //     }
    // }, [])

    // useEffect(() => {
    //     document.addEventListener("keydown", escFunction, false)

    //     return () => {
    //         document.removeEventListener("keydown", escFunction, false)
    //     }
    // }, [])

    const setPanel = (st) => {
        if (st === "code") {
            return <CodeFiles style={menu} />
        } else if (st === "database") {
            return <DataView />
        } else if (st === "pages") {
            return <Pages />
        } else if (st === "tools") {
            return <Tools />
        } else if (st === "search") {
            return <Search />
        } else if (st === "tools") {
            return <Tools />
        } else if (st === "learn") {
            return <Learn />
        } else if (st === "layers") {
            return <Layers style={{ width: "100%" }} />
        }
    }

    const applyLayout = (ly) => {
        switch (ly) {
            case "full": {
                return (
                    <PanelGroup
                        borderColor="#E4E4E4"
                        panelColor="white"
                        panelWidths={[
                            { size: 56, resize: "fixed" },
                            { size: 220, minSize: 100, resize: "dynamic" },
                            { minSize: 200, resize: "dynamic" },
                        ]}
                    >
                        <div>
                            <SiteTabs callback={setActive} {...siteTabs()} />
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
                                <div>
                                    <Scroll
                                        background={"transparent"}
                                        y={10}
                                        width={"100%"}
                                        height={"100%"}
                                    >
                                        <Frame
                                            width={"100%"}
                                            height={1000}
                                            background={"#F0F3F5"}
                                        >
                                            <Syntax {...syntax(null)} />
                                        </Frame>
                                    </Scroll>
                                </div>
                                <IDETabs2 />
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
                            { size: 220, minSize: 100, resize: "dynamic" },
                            { size: 500, minSize: 200, resize: "dynamic" },
                            { minSize: 200, resize: "dynamic" },
                        ]}
                    >
                        <div>
                            <SiteTabs
                                callback={setActive}
                                {...siteTabs(null)}
                            />
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
            case "stage": {
                return (
                    <PanelGroup
                        borderColor="#E4E4E4"
                        panelColor="white"
                        panelWidths={[{ minSize: 200, resize: "dynamic" }]}
                    >
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
    onTabFocusChange: (x) => {},
    setLayout: () => {},
}
const menu: React.CSSProperties = {
    width: "inherit",
}
// Learn more: https://framer.com/api/property-controls/
