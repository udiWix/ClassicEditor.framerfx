import * as React from "react"
import { Frame, useCycle } from "framer"

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Test() {
    const [twist, cycle] = useCycle(
        { scale: 0.5, rotate: 0 },
        { scale: 1, rotate: 90 }
    )

    return <Frame>Hello world</Frame>
}
