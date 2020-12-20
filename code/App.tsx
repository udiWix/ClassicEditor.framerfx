import { Data, Override, Frame, useAnimation } from "framer"

// import { Unsplash } from "@framer/unsplash.unsplash/code/Unsplash";
// Override Docs: https://framer.com/docs/overrides
let codeSnippet = `//-------------Imports-------------//

import wixWindow from 'wix-window';

//-------------Global Variables-------------//

// Available colors.
const colorPicker = ['red', 'pink', 'yellow'];
// Map of product data.
let productsMap = {};

//-------------Repeater Setup-------------//

// Set up each item in the products repeater as it is loaded.
export function productsRepeater_itemReady($w, itemData, index) {

	// Create a product object from the current item's data by calling the createProductObject() function.
	let product = createProductObject(itemData);
	// Add the newly created product to the global product map.
	productsMap[product.productId] = product;

	// Set the item's image to the main image from the product object.
	$w('#image').src = product.mainImage.src;
	// Set the item's price to the price from the product object.
	$w('#price').text = product.price;
	// Set the item's name to the name from the product object.
	$w('#productName').text = product.name;

	// If the site is being viewed on a mobile site:
	if (wixWindow.formFactor === 'Mobile') {
		colorPicker.forEach(color => {
			$w("#$color").show();
		});
		$w('#cartButton').show();
	} else {
		// Set the items's hover functionality by calling the initProductHover() function and passing it a selector scoped to the current item.
		initProductHover($w);
		// Set the item's direction hover functionality by calling the initDirectionsHover() function 
		// and passing it a selector scoped to the current item along with the current product object.
		initDirectionsHover($w, product);
	}
	// Set the item's color picker functionality by calling the initColorPicker() function
	// and passing it a selector scoped to the current item along with the current product object.
	initColorPicker($w, product);

	// Set the action that occurs when a user clicks the "Add to Cart" button for the current item.
	$w('#cartButton').onClick(() => {
		// Get the current product's object from the global products object.
		let productObj = productsMap[product.productId];
		// Add the current product to the shopping cart with the selected color.
		$w("#shoppingCartIcon").addToCart(productObj.productId, 1, { choices: { Color: productObj.colorSelected } })
			.then(() => console.log('added!'))
			.catch(console.error);
	});
}

//-------------Utility Functions for Repeater Setup-------------//

// Create an object that represents a project from the product data.
function createProductObject(productRecord) {
	let product = {
		colorSelected: 'red',
		productId: productRecord._id,
		productImagesByColor: {
			red: {
				front: productRecord.mediaItems[0],
				right: productRecord.mediaItems[1],
				left: productRecord.mediaItems[2]
			},
			pink: {
				front: productRecord.mediaItems[3],
				right: productRecord.mediaItems[4],
				left: productRecord.mediaItems[5]
			},
			yellow: {
				front: productRecord.mediaItems[6],
				right: productRecord.mediaItems[7],
				left: productRecord.mediaItems[8]
			}
		},
		mainImage: productRecord.mediaItems[0],
		price: productRecord.formattedPrice,
		name: productRecord.name
	}

	return product;
}

// Initialize the product hover functionality.
function initProductHover($w) {
	// Set the action that occurs when the mouse enters a product area.
	$w('#productContainer').onMouseIn(() => {
		// For each color defined in the global colorPicker variable:
		colorPicker.forEach(colorChoice => {
			// Show the color button.
			$w('#$colorChoice').show();
		});
		// Show the "Add to Cart" button.
		$w('#cartButton').show();
	});

	$w('#productContainer').onMouseOut(() => {
		// For each color defined in the global colorPicker variable:
		colorPicker.forEach(colorChoice => {
			// Hide the color button.
			$w("#$colorChoice").hide();
		});
		// Hide the "Add to Cart" button.
		$w('#cartButton').hide();
	});
}

// Initialize the color picker functionality for a product.
function initColorPicker($w, product) {
	// For each color defined in the global colorPicker variable:
	colorPicker.forEach(colorChoice => {
		// Set the action that occurs when that color's corresponding button is clicked.
		$w('#$colorChoice').onClick(() => {
			// Get the current product's object from the global productsMap variable.
			let productObj = productsMap[product.productId];
			// Set the product objects selected color to the color that was clicked.
			productObj.colorSelected = colorChoice;
			// Set the product image to the frontal image from the product object that corresponds to the color that was clicked. 
			$w('#image').src = productObj.productImagesByColor[colorChoice].front.src;
		});
	});
}

// Initialize the direction hover functionality for a product.
// Each product has a transparent box on the left third and right third of the product image. 
function initDirectionsHover($w, product) {
	// Local variables:
	let productObj;
	let colorSelected;
	const directions = ['left', 'right'];

	// For each direction in the directions list:
	directions.forEach(direction => {
		// Set the action that occurs when the user mouses into the box on that side of the image.
		$w('#$directionBox').onMouseIn(() => {
			// Get the current product object.
			productObj = productsMap[product.productId];
			// Get the color that is currently displayed.
			colorSelected = productObj.colorSelected;
			// Set the product image to be the image for the current product
			// with the selected color facing the direction that the mouse entered. 
			$w('#image').src = productObj.productImagesByColor[colorSelected][direction].src;
		});
		// Set the action that occurs when the user mouses out of the box on that side of the image.
		$w('#$directionBox').onMouseOut(() => {
			// Get the current product object.
			productObj = productsMap[product.productId];
			// Get the color that is currently displayed.
			colorSelected = productObj.colorSelected;
			// Set the product image to be the image for the current product with the selected color facing forwards. 
			$w('#image').src = productObj.productImagesByColor[colorSelected].front.src;
		});
	});
}`

let defaultCode = `// For full API documentation, including code examples, visit https://wix.to/94BuAAs

$w.onReady(function () {
	//TODO: write your page related code here...

});`

let defaultBackend = `// Filename: backend/aModule.jsw (web modules need to have a .jsw extension)

export function multiply(factor1, factor2) {
    return factor1 * factor2;
}



//Use the following code in one of your site's front-end files
//to call the multiply function from backend/aModule.jsw.

/* 
import {multiply} from 'backend/aModule';

$w.onReady(function () {
	
	multiply(4,5).then(product => {
	    console.log(product);
	      // Logs: 20
	})
	.catch(error => {
		console.log(error);
	});
});
*/`

const data = Data({
    iconTabsActive: "null",
    layout: "stage",
    page: "Home",
    previousLayout: "bottom",
    selectedComp: "",
    propPosition: { x: null, y: null },
    activeIndex: 0,
    tabIndex: 0,
    propsBtn: true,
    propsBtnDisabled: false,
    section: "pages",
    treeFocus: "Home",
    devMode: false,
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
    codeString: defaultCode,
    contentOffsetY: 0,
    corvidDropDown: false,
    addPanel: false,
})

export function enableCorvid(props): Override {
    return {
        canvasLayout: data.layout,
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
        onTabClick(x, y, z) {
            console.log(x)
            data.activeIndex = y

            let page = data.IDEtabs[y].tab
            data.IDEtabs[y].pinned = true

            updateCode(page)
            if (y === 0) {
                data.propsBtn = true
                data.propsBtnDisabled = false
            } else {
                data.propsBtn = false
                data.propsBtnDisabled = true
            }
        },
        onCloseTab(x, y) {
            console.log(x, y)
            let tabs = data.IDEtabs
            let newTabs = tabs.filter((tab) => tab.id !== x)
            data.IDEtabs = newTabs
            data.activeIndex = y
        },
    }
}

const remove = (array, element) => {
    return array.filter((el) => el !== element)
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
    tabs.forEach(function (tab) {
        tabsArray.push(tab.tab)
    })
    return tabsArray
}

async function removeUnpinned() {
    let tabs = data.IDEtabs
    let newTabs = tabs.filter(function (tab) {
        return tab.pinned == true
    })
    data.IDEtabs = newTabs
    return
}

export function pageSwitch(props): Override {
    return {
        current: data.treeFocus,
        page: data.page,
        switchPage(page) {
            data.treeFocus = page
            if (data.section === "pages") {
                data.page = page
                data.IDEtabs[0].tab = page
                data.activeIndex = 0
            } else if (data.section === "code") {
                addTab(page, true)
            }
            updateCode(page)
        },
        doubleSwitchPage(page) {
            if (data.section === "code") {
                data.treeFocus = page
                addTab(page, false)
            }
        },
    }
}

export function siteTabs(): Override {
    return {
        updateTab(t) {
            data.section = t
            if (t != "pages") {
                data.propsBtn = false
                data.propsBtnDisabled = true
            } else {
                data.propsBtn = true
                data.propsBtnDisabled = false
            }
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

export function corvidDropDown(props): Override {
    return {
        visible: data.corvidDropDown,
    }
}

export function corvidOnContent(props): Override {
    return {
        visible: !data.devMode,
    }
}
export function corvidOffContent(props): Override {
    return {
        visible: data.devMode,
    }
}

export function turnOn(props): Override {
    return {
        onClick() {
            data.layout = "bottom"
            data.corvidDropDown = false
            data.devMode = true
        },
    }
}
export function turnOff(props): Override {
    return {
        onClick() {
            data.layout = "stage"
            data.corvidDropDown = false
            data.devMode = false
        },
    }
}
export function devModeButton(props): Override {
    return {
        onClick() {
            let v = data.corvidDropDown
            data.corvidDropDown = !v
        },
    }
}
export function corvidToggle(props): Override {
    return {
        visible: data.devMode,
        onClick() {
            let m = data.layout
            data.layout = m == "stage" ? "bottom" : "stage"
            data.addPanel = false
        },
    }
}
export function modeLine(props): Override {
    return {
        left: data.layout == "stage" ? 26 : 84,
    }
}
export function codeLabel(props): Override {
    return {
        style: { color: data.layout == "stage" ? "#000000" : "#116DFF" },
    }
}
export function designLabel(props): Override {
    return {
        style: { color: data.layout == "stage" ? "#116DFF" : "#000000" },
    }
}

export function toggleFullIDE(props): Override {
    return {
        canvasLayout: data.previousLayout,
        full: data.layout === "bottom" ? false : true,
        setLayout(ly) {
            data.layout = ly
            data.propsBtnDisabled =
                ly === "bottom" && data.activeIndex === 0 ? false : true
        },
    }
}

export function hideIde(props): Override {
    return {
        visible: true,
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
        disabled: data.propsBtnDisabled,

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
            if (c != "") {
                data.activeIndex = 0
            }
        },
    }
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

export function updateCode(page) {
    let section = data.section

    if (page === "Gallery") {
        data.codeString = codeSnippet
    } else if (section === "pages") {
        data.codeString = defaultCode
    } else if (section === "code") {
        data.codeString = defaultBackend
    }
}

export function addPanel(): Override {
    let panel = data.addPanel ? 0 : -680

    return {
        left: panel,
        callback() {
            data.addPanel = false
        },
    }
}

export function addBtn(): Override {
    let panel = data.addPanel
    let layout = data.layout

    return {
        callback() {
            data.addPanel = !panel
            // data.layout = panel
            //     ? layout
            //     : (layout = "bottom" ? "stage" : "bottom")
        },
    }
}
