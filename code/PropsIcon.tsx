import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function PropsIcon(props) {
    const svg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18">
            <path
                d="M 19.618 4.38 C 21.486 4.38 23 5.857 23 7.68 L 23 14.28 C 23 16.103 21.486 17.58 19.618 17.58 L 8.794 17.58 C 6.926 17.58 5.412 16.103 5.412 14.28 L 5.412 13.62 L 6.765 13.62 L 6.765 14.28 C 6.765 15.374 7.673 16.26 8.794 16.26 L 19.618 16.26 C 20.738 16.26 21.647 15.374 21.647 14.28 L 21.647 7.68 C 21.647 6.586 20.738 5.7 19.618 5.7 L 18.941 5.7 L 18.941 4.38 Z M 8.709 0.321 L 10.043 0.537 L 8.344 10.511 L 7.009 10.295 Z M 12.718 1.832 L 16.384 5.41 L 12.718 8.974 L 11.771 8.05 L 14.463 5.41 L 11.771 2.77 Z M 4.343 1.832 L 5.29 2.77 L 2.598 5.41 L 5.29 8.05 L 4.343 8.974 L 0.676 5.41 Z"
                fill={props.tint}
            ></path>
        </svg>
    )

    return <div>{svg}</div>
}

PropsIcon.defaultProps = {
    tint: "rgba(31,51,68,1)",
}
