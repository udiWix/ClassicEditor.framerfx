import { Data, Override, Frame } from "framer"

// import { Unsplash } from "@framer/unsplash.unsplash/code/Unsplash";
// Override Docs: https://framer.com/docs/overrides
const data = Data({
    iconTabsActive: "null",
    layout: "bottom",
    page: "Home",
    previousLayout: "bottom",
    selectedComp: "",
    propPosition: { x: null, y: null },
    activeIndex: 0,
    propsBtn: true,
    treeTab: "pages",
    section: "pages",
    propPop: false,
    IDEtabs: [
        {
            tab: "Home",
            id: 0,
            closeable: true,
        },
        {
            tab: "Gallery",
            id: 1,
            closeable: true,
        },
        {
            tab: "About",
            id: 2,
            closeable: true,
        },
    ],
    focusedTab: null,
})
export function enableCorvid(props): Override {
    return {
        layout: data.layout,
        IDETabs: data.IDEtabs,
        treeTab: data.treeTab,
        setTreeTab: t => {
            data.treeTab = t
        },
        updateTabs(array, element) {
            data.IDEtabs = remove(array, element)
        },
        setLayout() {
            let layout = data.layout
            if (layout === "stage") {
                data.layout = data.previousLayout
                data.iconTabsActive = null
            } else {
                data.layout = "stage"
            }
        },
    }
}

export function onUpdateTabs(props): Override {
    return {
        data: data.IDEtabs,
        activeIndex: data.activeIndex,
        onTabFocusChange(x) {
            data.activeIndex = x
            let page = data.IDEtabs[x].tab
            data.page = page
        },
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
            data.section = data.treeTab
            if (data.treeTab === "code") {
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
        },
    }
}

export function setPanelView(props): Override {
    return {
        view: data.iconTabsActive,
    }
}

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
        toggleFocus() {
            const pb = !data.propsBtn
            data.propsBtn = pb
        },
        tab: data.section,
    }
}
export function propsPanel(props): Override {
    return {
        focused: data.propsBtn,
        comp: data.selectedComp,
        tab: data.section,
    }
}

export function compClick(props): Override {
    return {
        setComp(c) {
            data.selectedComp = c
        },
    }
}

export function ideContainer(props): Override {
    return {}
}

export function popOver(props): Override {
    return {
        isVisible: data.propPop,
        callback() {
            data.propPop = false
            console.log("callback")
        },
    }
}

export function handlerClick(props): Override {
    return {
        callback() {
            data.propPop = true
            console.log("click")
        },
    }
}
