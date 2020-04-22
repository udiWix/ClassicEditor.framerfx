import * as React from "react"
import { useState, useEffect } from "react"
import { Frame } from "framer"
import { Toast } from "./canvas"
// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Toaster(props) {
    return (
        <Frame
            position="relative"
            width={"100%"}
            height={"100%"}
            background={"transparent"}
            visible={props.show}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut" }}
        >
            <Toast />
        </Frame>
    )
}

Toaster.defaultProps = {
    show: false,
}
