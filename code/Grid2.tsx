import * as React from "react"
import { Frame, useCycle, Stack } from "framer"
import ColumnResizer from "react-column-resizer"
// import { ColumnResizer } from "./ColumnResizer"
import { Home } from "./canvas"
import { MiniTools } from "./canvas"
import { IDETabs2 } from "./IDETabs2"
import { LeftTree } from "./LeftTree"
import { IDE } from "./canvas"
import { DataView } from "./DataView"
import { Layers } from "./Layers"
import { Tools } from "./Tools"
import styled from "styled-components"
import { url } from "framer/resource"
import { SiteTabs } from "./SiteTabs"
import { Stage } from "./Stage"
import PanelGroup from "react-panelgroup"
import { currentPage } from "./App"
import { onUpdateTabs } from "./App"
import { useState, useEffect } from "react"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

interface Props {
    ide: boolean
    IDETabs: any
    onTabFocusChange: (x, y, z) => {}
    setActive: () => {}
    iconSize: 20
    layout: string
}

const table: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "0px",
    margin: "0px",
    border: "0px",
    borderSpacing: "0px",
}

const menu: React.CSSProperties = {
    width: "inherit",
}

function CResizer(props) {
    return <ColumnResizer className={props.className} />
}

export class Grid2 extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            active: "code",
        }
    }

    setActive = v => {
        this.setState({ active: v })
    }

    static defaultProps = {
        layout: "stage",
        onTabFocusChange: (x, y, z) => {},
        iconSize: 20,
    }
    setPanel = st => {
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

    applyLayout = ly => {
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
                            <SiteTabs callback={this.setActive} />
                        </div>
                        <div style={menu}>
                            {this.setPanel(this.state["active"])}
                        </div>
                        <div>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    position: "absolute",
                                }}
                            >
                                <IDETabs2 {...onUpdateTabs()} />

                                <Frame
                                    width={"100%"}
                                    height={"100%"}
                                    background={"transparent"}
                                >
                                    <IDE />
                                </Frame>
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
                            <SiteTabs callback={this.setActive} />
                        </div>
                        <div style={menu}>
                            {this.setPanel(this.state["active"])}
                        </div>
                        <div>
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    position: "absolute",
                                }}
                            >
                                <IDETabs2
                                    data={this.props.IDETabs}
                                    full={true}
                                    onTabFocusChange={
                                        this.props.onTabFocusChange
                                    }
                                />

                                <Frame
                                    width={"100%"}
                                    height={"100%"}
                                    background={"transparent"}
                                >
                                    <IDE />
                                </Frame>
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
                            <SiteTabs callback={this.setActive} />
                        </div>
                        <div style={menu}>
                            {this.setPanel(this.state["active"])}
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
        }
    }

    render() {
        return (
            <Frame width={"100%"} height={"100%"} background={"#F4F4F4"}>
                {this.applyLayout(this.props.layout)}
            </Frame>
        )
    }
}

const panelStyle: React.CSSProperties = {
    zIndex: 100,
    position: "absolute",
}
