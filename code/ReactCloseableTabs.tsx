import * as React from "react"
import styled, { ThemeProvider } from "styled-components"

const CloseableTabs = styled.div`
  margin: 0px;
  width:100%;
  position:relative;
  height: 36px;
  overflow:hidden;
  background:white;
  display:inline-block;
`
const TabContent = styled.div`
  padding: 0px;
  display: inline-block;

`
const TabPanel = styled.div`
  background: ${props => props.tabPanelColor || "white"};
  width: auto;
  display: inline-block;
  
`
const Tab = styled.div`
    border: none;
    box-sizing: border-box;
    background: none;
    display: inline-flex;
    vertical-align: middle;
    padding: 4px 4px 4px 20px;
    width: auto;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-family:  Arial, メイリオ, meiryo, sans-serif;
  font-size: 12px;
  font-smooth: antialiased;
  color:${props => (props.pinned ? "#2B5672" : "#7A92A5")};
  font-style: ${props => (props.pinned ? "normal" : "italic")};
  line-height:24px;
  font-weight:700;
  height:36px;
   

  .pageTab{
      width: 20px;
      background: null;
      height: 20px;
      margin-top: 3px;
      margin-left:8px;
      display: block;
      vertical-align: middle;
      position:relative;
      right:0px;
      font-size: 0;
      opacity: 0;
    }



  .closeTab {
      width: 20px;
      background: null;
      height: 20px;
      margin-top: 3px;
      margin-left:8px;
      display: block;
      vertical-align: middle;
      position:relative;
      right:0px;
      font-size: 0;
      border-radius: 30px;
      opacity: .0;
      &:after,
      &:before {
        content: '';
        display: block;
        width: 12px;
        height: 1px;
        position: absolute;
        left: 4px;
        top: 8px;
        background: #333;
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
            }
        }
    &.active {
      background:#F0F3F5;
     
    }
    &:hover {
        border-right: 1px solid #F0F3F5;
        
    .closeTab{
        opacity:.8
    }
    
    }
`

interface Props {
    tabPanelColor: string
    mainClassName: string
    tabPanelClass: string
    data: any
    activeIndex: number
    identifier: string
    onCloseTab: (x, y) => void
    onTabClick: (x, y, z) => void
    onBeforeTabClick: (x, y, z) => void
    renderClose: () => void
    tabContentClass: () => void
}

class ReactCloseableTabs extends React.Component<Props> {
    static defaultProps = {
        data: [
            {
                tab: "Home.js",
                component: <div>Item details for 1</div>,
                id: 1,
                closeable: true,
                pinned: false,
            },
            {
                tab: "Gallery.js",
                component: <div>Item details for 2</div>,
                id: 2,
                closeable: true,
                pinned: false,
            },
            {
                tab: "Item.js",
                component: <div>Item details for 3</div>,
                id: 3,
                closeable: true,
                pinned: false,
            },
        ],
    }

    state = {
        data: this.props.data,
        activeIndex: this.props.activeIndex || 0,
        identifier: this.props.identifier || "id",
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            const newState = {
                data: nextProps.data,
                activeIndex: null,
            }
            if (Number.isInteger(nextProps.activeIndex)) {
                newState.activeIndex = nextProps.activeIndex
            }
            this.setState(newState)
        }
    }

    handleTabClick = (id, index) => {
        this.props.onBeforeTabClick &&
            this.props.onBeforeTabClick(id, index, this.state.activeIndex)
        this.setState({ activeIndex: index }, () => {
            this.props.onTabClick &&
                this.props.onTabClick(id, index, this.state.activeIndex)
        })
    }

    closeTab = (e, id) => {
        e.stopPropagation()

        const activeId = this.state.data[this.state.activeIndex][
            this.state.identifier
        ]
        const newIndex =
            activeId === id
                ? this.state.activeIndex - 1
                : this.state.activeIndex
        this.props.onCloseTab && this.props.onCloseTab(id, newIndex)
        // this.setState({
        //     data: this.state.data.filter(item => item.id !== id),
        //     activeIndex: newIndex,
        // })
    }

    render() {
        let noTabUnmount = this.props
        let data = this.state.data
        let activeIndex = this.state.activeIndex

        return (
            <CloseableTabs className={this.props.mainClassName || ""}>
                <TabPanel
                    tabPanelColor={this.props.tabPanelColor}
                    className={this.props.tabPanelClass || ""}
                >
                    {data.map((item, i) => {
                        return (
                            <Tab
                                pinned={item.pinned}
                                className={`tab ${
                                    i === activeIndex ? "active" : ""
                                }`}
                                onClick={() => this.handleTabClick(item.id, i)}
                                key={i}
                            >
                                {item.tab}
                                {item.closeable ? (
                                    <a
                                        className="closeTab"
                                        onClick={e =>
                                            data.length > 1
                                                ? this.closeTab(e, item.id)
                                                : null
                                        }
                                    />
                                ) : (
                                    <span className={"pageTab"} />
                                )}
                            </Tab>
                        )
                    })}
                </TabPanel>
                <TabContent className={this.props.tabContentClass || ""}>
                    {noTabUnmount
                        ? data.map((item, index) => (
                              <div
                                  key={index}
                                  style={{
                                      display:
                                          index === activeIndex
                                              ? "block"
                                              : "none",
                                  }}
                              />
                          ))
                        : data[activeIndex]
                        ? data[activeIndex].component
                        : null}
                </TabContent>
            </CloseableTabs>
        )
    }
}

export default ReactCloseableTabs
