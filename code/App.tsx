import { Data, Override, Frame } from "framer"

// import { Unsplash } from "@framer/unsplash.unsplash/code/Unsplash";
// Override Docs: https://framer.com/docs/overrides
const data = Data({
    iconTabsActive: "null",
    layout: "bottom",
    page: "Home.js",
    previousLayout: "bottom",
    // propertiesPanel: false,
    propPosition: { x: null, y: null },
    activeIndex: 0,
    propsBtn: false,
    IDEtabs: [
        {
            tab: "Home.js",
            id: 0,
            closeable: true,
        },
        {
            tab: "Gallery.js",
            id: 1,
            closeable: true,
        },
        {
            tab: "About.js",
            id: 2,
            closeable: true,
        },
    ],
    focusedTab: null,
})

export function onUpdateTabs(props): Override {
    return {
        data: data.IDEtabs,
        activeIndex: data.activeIndex,
        onTabFocusChange(x) {
            data.activeIndex = x
            let page = data.IDEtabs[x].tab
            data.page = page
        },
        // updateTabs(array, element) {
        //     data.IDEtabs = remove(array, element)
        // },
    }
}

const getActive = () => {
    let page = data.page
    let tabs = data.IDEtabs
    let active
    tabs.forEach(tab => {
        if (tab.tab === page) {
            active = tab.id
        }
    })
    return active
}

const remove = (array, element) => {
    return array.filter(el => el !== element)
}

export function isCorvidSelector(props): Override {
    return {
        animate: { left: data.layout != "stage" ? 70 : 0 },
        transition: { duration: 0.15, type: "tween", ease: "easeOut" },
    }
}

export function isEditor(props): Override {
    return {
        style:
            data.layout === "stage"
                ? { color: "#2076FD" }
                : { color: "#9E9E9E" },
    }
}
export function isCode(props): Override {
    return {
        style:
            data.layout === "stage"
                ? { color: "#9E9E9E" }
                : { color: "#2076FD" },
    }
}

export function arrowAnimation(props): Override {
    return {
        animate: { left: data.layout != "stage" ? 18 : 0 },
        // transition: { delay:  0.2 }
    }
}
export function switchBtn(props): Override {
    return {
        style: { cursor: "pointer" },
        onClick() {
            let layout = data.layout
            if (layout === "stage") {
                data.layout = data.previousLayout
            } else {
                data.layout = "stage"
            }
        },
    }
}

export function toasterContainer(props): Override {
    return {
        animate: { opacity: data.layout != "stage" ? 0 : 1 },
        transition: { delay: data.layout != "stage" ? 3 : 0.2, duration: 0.4 },
    }
}

export function toggleHeaderBtns(props): Override {
    return {
        visible: data.layout == "stage" ? true : false,
    }
}
export function toggleDevBtn(props): Override {
    return {
        visible: data.layout != "stage" ? true : false,
        style: { cursor: "pointer" },
        onClick() {
            data.layout = "stage"
        },
    }
}

export function pageSwitch(props): Override {
    return {
        current: data.page,
        switchPage(page) {
            data.page = page
            if (page === "utils.js" || page == "routers.js") {
                data.layout = "full"
            } else {
                data.layout = data.previousLayout
            }
            data.activeIndex = getActive()
        },
    }
}

export function currentPage(): Override {
    return {
        page: setPage(data.page),
    }
}

function setPage(v) {
    if (v == "utils.js" || v == "routers.js") {
        return "Home.js"
    } else {
        return v
    }
}

export function layoutPick(props): Override {
    return {
        layout: data.layout,
        setLayout(ly) {
            if (ly != "detach") {
                data.previousLayout = ly
                data.layout = ly
            } else {
                // let curTab = browser.tabs.getCurrent()
                // console.log(curTab)
            }
        },
    }
}
export function toggleFullIDE(props): Override {
    return {
        layout: data.previousLayout,
        setLayout(ly) {
            data.layout = ly
        },
    }
}

export function IDEswitch(props): Override {
    return {
        visible: data.layout === "bottom" ? true : false,
    }
}
export function IDEheader(props): Override {
    return {
        data: data.IDEtabs,
        onTabFocusChange(x, y, z) {
            data.focusedTab = x
            console.log(data.focusedTab)
        },
    }
}

export function compClick(props): Override {
    return {
        onContextMenu(e) {
            e.preventDefault()
            let compW = e.currentTarget
            let rect = compW.getBoundingClientRect()
            let pos = calPos(rect)

            data.propPosition.x = pos.x
            data.propPosition.y = pos.y
        },
    }
}

export function toggleToolbar(props): Override {
    return {
        visible: data.layout === "stage" ? true : false,
    }
}

export function setPanelView(props): Override {
    return {
        view: data.iconTabsActive,
    }
}

// export function toaster(props): Override {
//     return {
//         show: data.toolTip,
//     }
// }

// export function DevSwitchButton(props): Override {
//     return {
//         style: {
//             cursor: "pointer",
//         },
//         State: data.layout === "stage" ? "Design" : "Develop",

//         onClick() {
//             data.toolTip = false
//             data.propertiesPanel = false
//             data.inspector = false
//             let current = data.layout
//             if (current == "stage") {
//                 data.layout = "left"
//                 clearTabs()
//             } else {
//                 data.layout = "stage"
//                 // data.iconTabsActive = "add panel"
//             }
//         },
//         // onMouseOver(){
//         //     data.toolTip = true
//         // },
//         // onMouseLeave(){
//         //     data.toolTip = false
//         // }
//     }
// }

export function adjustStageHeight(props): Override {
    return {
        height: data.layout == "stage" ? "95%" : "105%",
    }
}
export function listenToIconTabs(props): Override {
    return {
        setActive(v) {
            data.iconTabsActive = v
        },
        active: data.iconTabsActive,
    }
}

export function tooglePopup(props): Override {
    return {
        onClick() {
            const ide = !data.popup
            data.popup = ide
        },
    }
}

export function clearPanel(props): Override {
    return {
        style: { cursor: "pointer" },
        onClick() {
            data.iconTabsActive = null
        },
    }
}

export function setIDE(props): Override {
    return {
        width: "100%",
        height: "100%",
    }
}

export function clearTabs() {
    data.iconTabsActive = null
}

export function calPos(comp) {
    let width = comp.width
    let height = comp.height
    let x = comp.left + width / 2
    let y = comp.top + height + 60

    return { x: x, y: y }
}

export function propsBtn(props): Override {
    return {
        focused: data.propsBtn,
        onClick() {
            const pb = !data.propsBtn
            data.propsBtn = pb
            console.log(data.propsBtn)
        },
    }
}
export function propsPanel(props): Override {
    return {
        focused: data.propsBtn,
    }
}
