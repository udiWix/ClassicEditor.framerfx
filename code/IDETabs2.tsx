import * as React from "react"
import { Frame, useCycle } from "framer"
import CloseableTabs from "./ReactCloseableTabs"
import { Icon } from "./Icon"
import { LayoutPicker } from "./LayoutPicker"
import { layoutPick } from "./App"
import { toggleFullIDE } from "./App"
import { IDEbutton } from "./IDEbutton"

interface Props {
    data: any
    onTabFocusChange: (x) => {}
    setLayout: (ly) => {}
    isDropdown: (d) => {}
    full: boolean
    page: any
    activeIndex: any
}

export class IDETabs2 extends React.Component<Props> {
    static defaultProps = {
        data: [
            {
                tab: "Home.js",
                component: <div>Item details for 1</div>,
                id: 1,
                closeable: true,
            },
            {
                tab: "Gallery.js",
                component: <div>Item details for 2</div>,
                id: 2,
                closeable: true,
            },
            {
                tab: "Item.js",
                component: <div>Item details for 3</div>,
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

    // addItem = () => {
    //     const id = new Date().valueOf()
    //     this.setState({
    //         data: this.state.data.concat({
    //             tab: "New item " + id,
    //             component: (
    //                 <div>
    //                     Your new component data for{" "}
    //                     {id.toString().substring(6, 10)}
    //                 </div>
    //             ),
    //             id: id,
    //             closeable: true,
    //         }),
    //         activeIndex: this.state.data.length,
    //     })
    // }
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
                    // onCloseTab={(id, newIndex) => {
                    //     this.setState({
                    //         data: this.state.data.filter(
                    //             item => item.id !== id
                    //         ),
                    //         activeIndex: newIndex,
                    //     })
                    // }}
                ></CloseableTabs>
                <IDEbutton full={this.props.full} {...toggleFullIDE()} />
                <Frame
                    onTap={this.onTap}
                    width={26}
                    height={26}
                    style={{
                        position: "relative",
                        float: "right",
                        cursor: "pointer",
                        background: "transparent",
                        padding: "4px 4px",
                        top: "-30px",
                        marginRight: "5px",
                    }}
                >
                    <Icon
                        set={"feather"}
                        icon={"more-horizontal"}
                        width={"18px"}
                        height={"18px"}
                        color={"#4D4D4D"}
                    />

                    {this.state.dropDown ? (
                        <Frame height={36} width={100} x={-100}>
                            <LayoutPicker
                                {...layoutPick()}
                                isDropdown={this.closeDropdown}
                            />
                        </Frame>
                    ) : null}
                </Frame>
            </div>
        )
    }
}
