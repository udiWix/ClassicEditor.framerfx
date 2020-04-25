import * as React from "react"
import { Frame, useCycle } from "framer"
import CloseableTabs from "./ReactCloseableTabs"
import { Icon } from "./Icon"
import { toggleFullIDE } from "./App"
import { IDEbutton } from "./IDEbutton"
import { PropertiesBtn } from "./PropertiesBtn"
import { propsBtn } from "./App"

interface Props {
    data: any
    onTabFocusChange: (x) => void
    setLayout: (ly) => void
    isDropdown: (d) => void
    full: boolean
    activeIndex: any
}

export class IDETabs2 extends React.Component<Props> {
    static defaultProps = {
        data: [
            {
                tab: "Home.js",
                id: 1,
                closeable: true,
            },
            {
                tab: "Gallery.js",
                id: 2,
                closeable: true,
            },
            {
                tab: "Item.js",
                id: 3,
                closeable: true,
            },
        ],
        full: false,
    }

    state = {
        data: this.props.data,
        fullWidth: false,
        dropDown: false,
    }

    onTap = () => {
        // this.props.isDropdown(!this.props.dropDown)
        let current = this.state.dropDown
        this.setState({ dropDown: !current })
    }

    closeDropdown = () => {
        this.setState({ dropDown: false })
    }

    tabClick = x => {
        this.props.onTabFocusChange(x)
    }

    render() {
        return (
            <div>
                <CloseableTabs
                    data={this.state.data}
                    onTabClick={this.tabClick}
                    activeIndex={this.props.activeIndex}
                ></CloseableTabs>
                <Frame
                    onTap={this.onTap}
                    width={36}
                    height={36}
                    style={{
                        position: "relative",
                        float: "right",
                        cursor: "pointer",
                        background: "transparent",
                        padding: "9px 9px",
                        top: "-36px",
                        marginRight: "5px",
                    }}
                >
                    <Icon
                        set={"feather"}
                        icon={"more-horizontal"}
                        width={18}
                        height={18}
                        color={"#4D4D4D"}
                    />
                </Frame>

                <IDEbutton full={this.props.full} {...toggleFullIDE(null)} />
                <Frame
                    width={36}
                    height={36}
                    style={{
                        position: "relative",
                        float: "right",
                        cursor: "pointer",
                        background: "transparent",
                        padding: "9px 9px",
                        top: "-36px",
                        marginRight: "5px",
                    }}
                >
                    <Icon
                        set={"feather"}
                        icon={"minus"}
                        width={"18px"}
                        height={"18px"}
                        color={"#4D4D4D"}
                    />
                </Frame>
                <PropertiesBtn {...propsBtn()} />
            </div>
        )
    }
}
