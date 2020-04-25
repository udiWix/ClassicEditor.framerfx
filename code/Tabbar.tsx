import * as React from "react"
import {
    Frame,
    Stack,
    addPropertyControls,
    ControlType,
    RenderTarget,
} from "framer"

function TabButton({ title = "Title", onTap, active }) {
    const color = active === title ? "#1199EE" : "white"

    return (
        <Frame
            size={60}
            onTap={onTap}
            whileHover={{ scale: 1.1 }}
            background={color}
            borderRadius={8}
        >
            {title}
        </Frame>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function TabBar({ children }) {
    if (React.Children.count(children) === 0) {
        return <Frame size="100%">Add some children</Frame>
    }

    function nameFor(child) {
        if (child.props.name) {
            return child.props.name
        }

        let count = -1

        for (let c of React.Children.toArray(children)) {
            count++

            if (child.props.id === c.props.id) {
                return `Tab ${count + 1}`
            }
        }

        return "Huh?"
    }
    const first = nameFor(children[0])
    const [active, setActive] = React.useState(first)

    console.log(`first: ${first} active: ${active}`)

    function makeProps(title) {
        return {
            title: title,
            active: active,
            onTap: () => {
                setActive(title)
            },
        }
    }

    let activeView = <Frame center>Add some children</Frame>

    React.Children.forEach(children, child => {
        if (nameFor(child) === active) {
            const animation =
                RenderTarget.current() === RenderTarget.canvas
                    ? {}
                    : { animate: { scale: 1 }, initial: { scale: 1.1 } }
            activeView = React.cloneElement(child, {
                width: "100%",
                height: "100%",
                ...animation,
            })
        }
    })

    const buttons = React.Children.map(children, child => {
        return <TabButton {...makeProps(nameFor(child))} />
    })

    return (
        <Frame size="100%">
            {activeView}
            <Stack
                bottom={0}
                width="100%"
                height={100}
                background="rgba(255, 255, 255, .2)"
                direction="horizontal"
                distribution="center"
            >
                {buttons}
            </Stack>
        </Frame>
    )
}

addPropertyControls(TabBar, {
    children: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.ComponentInstance,
        },
    },
})
