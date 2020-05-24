import { Data, Override, Frame, useAnimation } from "framer"

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
    tabIndex: 0,
    propsBtn: true,
    section: "pages",
    propPop: false,
    IDEtabs: [
        {
            tab: "Home",
            id: 0,
            closeable: false,
            pinned: true,
        },
    ],
    focusedTab: null,
    contextualMenu: false,
    contextualMenuP: { x: null, y: null },
    codeString: `import wixData from 'wix-data';

const filter = wixData.filter().eq("year", 2010);
const having = wixData.filter().gt("maxPopulation", 1000000);

wixData.aggregate("PopulationData")
  .filter(filter)
  .group("state")
  .max("population", "maxPopulation")
  .having(having)
  .descending("maxPopulation")
  .skip(5)
  .limit(3)
  .run()
  .then( (results) => {
    if (results.items.length > 0) {
      let items = results.items;
      let numItems = results.length;
      let hasNext = results.hasNext();
    } else {
      // handle case where no matching items found
    }
  } )
  .catch( (error) => {
    let errorMsg = error.message;
    let code = error.code;
  } 
  
  
  );`,

    contentOffsetY: 0,
})

export function enableCorvid(props): Override {
    return {
        layout: data.layout,
        IDETabs: data.IDEtabs,

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
        tab: data.section,
        onTabFocusChange(x) {
            data.activeIndex = x
            let page = data.IDEtabs[x].tab
            data.page = page
        },
        onCloseTab(x, y) {
            console.log(x, y)
            let tabs = data.IDEtabs
            let newTabs = tabs.filter(tab => tab.id !== x)
            data.IDEtabs = newTabs
            data.activeIndex = y
        },
    }
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

async function addTab(page, single) {
    await removeUnpinned()

    const tabs = getTabs(data.IDEtabs)
    let isTab = tabs.includes(page)
    let index = data.IDEtabs.length

    let id = data.tabIndex++
    let newTab = {
        tab: page,
        id: id,
        closeable: true,
        pinned: false,
    }

    if (!isTab) {
        data.IDEtabs.push(newTab)
        data.activeIndex = index
        data.IDEtabs[index].pinned = single ? false : true
    } else if (isTab) {
        let i = tabs.indexOf(page)
        data.activeIndex = i
    }
}

function getTabs(tabs) {
    const tabsArray = []
    tabs.forEach(function(tab) {
        tabsArray.push(tab.tab)
    })
    return tabsArray
}

async function removeUnpinned() {
    let tabs = data.IDEtabs
    let newTabs = tabs.filter(function(tab) {
        return tab.pinned == true
    })
    data.IDEtabs = newTabs
    return
}

export function pageSwitch(props): Override {
    return {
        current: data.page,
        switchPage(page) {
            if (data.section === "pages") {
                data.page = page
                data.IDEtabs[0].tab = page
                data.activeIndex = 0
            } else if (data.section === "code") {
                addTab(page, true)
            }
        },
        doubleSwitchPage(page) {
            if (data.section === "code") {
                addTab(page, false)
            }
        },
    }
}

export function siteTabs(): Override {
    return {
        updateTab(t) {
            data.section = t
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
        disabled: data.layout === "bottom" ? false : true,
        toggleFocus() {
            const pb = !data.propsBtn
            data.propsBtn = pb
        },
    }
}

// export function IDEtabs(props): Override {
//     return {
//         tab: data.section,
//         activeIndex: data.activeIndex,
//     }
// }

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
        callback(id: string, eventName: string) {
            data.propPop = id === "Menu1" ? true : false
            let funName = id + eventName
            let snippet = data.codeString
            let code =
                `
            
export function ` +
                funName +
                `(event) {
	//Add your code for this event here: 
}`
            data.codeString = snippet + code
            data.contentOffsetY = 500
        },
    }
}

export function contextualMenu(props): Override {
    return {
        visible: data.contextualMenu,
        left: data.contextualMenuP.x,
        top: data.contextualMenuP.y,
    }
}

export function onEditorClick(props): Override {
    return {
        onContextMenu(e) {
            e.preventDefault()
            let x = e.clientX // Get the horizontal coordinate
            let y = e.clientY // Get the vertical coordinate

            console.log(x + " " + y)

            data.contextualMenuP.x = x
            data.contextualMenuP.y = y

            let pp = data.contextualMenu
            data.contextualMenu = !pp
        },
        onClick() {
            data.contextualMenu = false
            console.log("click")
        },
    }
}

export function syntax(props): Override {
    return {
        codeString: data.codeString,
    }
}

export function scrollSyntax(): Override {
    return {
        contentOffsetY: 0,
    }
}
