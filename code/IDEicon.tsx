import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function IDEicon(props) {
    const [icon, setIcon] = React.useState(icons[0])
    icons.forEach(function(i) {
        if (i.name == props.name) {
            setIcon(i)
        }
    })

    return <div style={style}>{icon.svg}</div>
}

IDEicon.defaultProps = {
    icon: "js",
}

const style: React.CSSProperties = {
    width: "20px",
    height: "20px",
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
}

const icons = [
    {
        name: "js",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="10.314" height="8">
                <path
                    d="M 4.458 5.671 C 4.458 6.511 4.263 7.108 3.873 7.465 C 3.483 7.821 2.888 8 2.086 8 C 1.666 8 1.322 7.943 1.054 7.83 C 0.801 7.728 0.58 7.559 0.414 7.343 C 0.252 7.125 0.141 6.874 0.088 6.608 C 0.028 6.319 -0.001 6.024 0 5.728 L 0 5.384 L 1.457 5.384 L 1.457 5.627 C 1.457 6.047 1.502 6.358 1.595 6.56 C 1.687 6.761 1.875 6.863 2.163 6.863 C 2.45 6.863 2.639 6.761 2.731 6.56 C 2.823 6.358 2.869 6.046 2.869 5.627 L 2.869 0 L 4.458 0 Z M 6.731 5.693 C 6.731 5.874 6.746 6.039 6.774 6.186 C 6.798 6.322 6.854 6.45 6.937 6.56 C 7.021 6.665 7.131 6.747 7.256 6.798 C 7.39 6.856 7.557 6.885 7.759 6.885 C 7.994 6.886 8.223 6.803 8.403 6.652 C 8.595 6.497 8.69 6.256 8.69 5.932 C 8.69 5.758 8.667 5.609 8.62 5.483 C 8.57 5.352 8.49 5.235 8.387 5.141 C 8.259 5.028 8.115 4.935 7.96 4.865 C 7.747 4.768 7.528 4.683 7.305 4.611 C 6.995 4.511 6.694 4.385 6.406 4.232 C 6.17 4.108 5.956 3.946 5.773 3.752 C 5.603 3.568 5.476 3.35 5.399 3.112 C 5.315 2.84 5.275 2.557 5.28 2.273 C 5.28 1.508 5.493 0.938 5.919 0.563 C 6.345 0.187 6.93 0 7.673 0 C 8.019 0 8.338 0.037 8.631 0.113 C 8.923 0.189 9.176 0.311 9.389 0.481 C 9.602 0.651 9.768 0.867 9.887 1.131 C 10.005 1.394 10.065 1.711 10.065 2.077 L 10.065 2.295 L 8.571 2.295 C 8.571 1.926 8.506 1.643 8.377 1.445 C 8.247 1.246 8.03 1.147 7.727 1.147 C 7.554 1.147 7.409 1.172 7.294 1.222 C 7.082 1.305 6.926 1.489 6.877 1.711 C 6.852 1.821 6.839 1.933 6.839 2.045 C 6.839 2.283 6.89 2.485 6.991 2.647 C 7.091 2.809 7.308 2.959 7.64 3.097 L 8.842 3.615 C 9.138 3.745 9.379 3.881 9.567 4.021 C 9.754 4.162 9.905 4.313 10.017 4.476 C 10.128 4.638 10.206 4.817 10.249 5.012 C 10.293 5.207 10.314 5.423 10.314 5.662 C 10.314 6.477 10.078 7.07 9.605 7.442 C 9.132 7.813 8.474 8 7.629 8 C 6.749 8 6.119 7.808 5.74 7.426 C 5.361 7.044 5.172 6.496 5.172 5.78 L 5.172 5.466 L 6.731 5.466 Z"
                    fill="rgb(234,168,3)"
                ></path>
            </svg>
        ),
    },
    {
        name: "jsw",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="8">
                <path
                    d="M 4.458 5.672 C 4.458 6.511 4.263 7.109 3.873 7.465 C 3.483 7.822 2.888 8 2.086 8 C 1.666 8 1.322 7.943 1.054 7.83 C 0.801 7.728 0.58 7.56 0.414 7.344 C 0.252 7.127 0.141 6.876 0.088 6.61 C 0.028 6.32 -0.001 6.024 0 5.727 L 0 5.385 L 1.457 5.385 L 1.457 5.628 C 1.457 6.047 1.502 6.358 1.595 6.56 C 1.687 6.762 1.876 6.864 2.163 6.864 C 2.45 6.864 2.639 6.762 2.731 6.56 C 2.823 6.358 2.869 6.047 2.869 5.628 L 2.869 0 L 4.458 0 Z M 6.892 5.695 C 6.892 5.875 6.906 6.04 6.935 6.187 C 6.959 6.323 7.014 6.451 7.098 6.561 C 7.178 6.661 7.283 6.741 7.418 6.799 C 7.55 6.857 7.719 6.885 7.92 6.885 C 8.155 6.886 8.384 6.804 8.564 6.653 C 8.756 6.497 8.851 6.258 8.851 5.932 C 8.851 5.76 8.828 5.61 8.781 5.484 C 8.731 5.354 8.651 5.237 8.548 5.143 C 8.421 5.029 8.277 4.936 8.121 4.866 C 7.908 4.769 7.689 4.684 7.466 4.612 C 7.156 4.512 6.855 4.385 6.567 4.232 C 6.331 4.108 6.117 3.946 5.934 3.752 C 5.765 3.568 5.637 3.35 5.56 3.112 C 5.477 2.841 5.436 2.558 5.441 2.274 C 5.441 1.508 5.654 0.939 6.081 0.563 C 6.505 0.188 7.09 0 7.833 0 C 8.179 0 8.499 0.038 8.79 0.114 C 9.083 0.19 9.335 0.313 9.55 0.483 C 9.761 0.653 9.928 0.869 10.047 1.132 C 10.167 1.396 10.225 1.711 10.225 2.079 L 10.225 2.296 L 8.732 2.296 C 8.732 1.926 8.667 1.644 8.537 1.446 C 8.408 1.248 8.191 1.148 7.888 1.148 C 7.74 1.144 7.593 1.17 7.455 1.224 C 7.244 1.307 7.088 1.49 7.038 1.711 C 7.013 1.819 7 1.931 7 2.047 C 7 2.285 7.051 2.486 7.152 2.647 C 7.253 2.81 7.469 2.959 7.802 3.097 L 9.003 3.616 C 9.299 3.746 9.54 3.882 9.728 4.023 C 9.915 4.163 10.066 4.315 10.178 4.477 C 10.289 4.639 10.368 4.817 10.41 5.013 C 10.454 5.207 10.475 5.423 10.475 5.662 C 10.475 6.478 10.239 7.072 9.766 7.442 C 9.293 7.815 8.636 8 7.79 8 C 6.91 8 6.28 7.809 5.901 7.427 C 5.523 7.044 5.333 6.495 5.333 5.781 L 5.333 5.467 L 6.893 5.467 L 6.893 5.695 Z M 12.21 0 L 13.095 5.916 L 13.117 5.916 L 14.059 0 L 15.605 0 L 16.546 5.916 L 16.568 5.916 L 17.454 0 L 19 0 L 17.543 8 L 15.739 8 L 14.843 2.196 L 14.821 2.196 L 13.924 8 L 12.12 8 L 10.664 0 Z"
                    fill="rgb(115,0,255)"
                ></path>
            </svg>
        ),
    },
    {
        name: "json",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13.008">
                <path
                    d="M 1.85 2.264 L 1.85 4.814 C 1.821 4.97 1.763 5.119 1.68 5.254 C 1.327 5.68 0.82 5.95 0.27 6.004 L 0 6.004 L 0 7.004 L 0.3 7.004 C 0.843 7.065 1.341 7.334 1.69 7.754 C 1.757 7.864 1.81 7.981 1.85 8.104 L 1.85 10.744 C 1.936 12.066 3.068 13.073 4.39 13.004 L 5 13.004 L 5 12.004 L 4.4 12.004 C 3.631 12.069 2.949 11.511 2.86 10.744 L 2.86 8.004 C 2.812 7.707 2.699 7.424 2.53 7.174 C 2.339 6.895 2.09 6.66 1.8 6.484 C 2.092 6.308 2.341 6.069 2.53 5.784 C 2.711 5.516 2.825 5.207 2.86 4.884 L 2.86 2.264 C 2.944 1.499 3.623 0.94 4.39 1.004 L 5 1.004 L 5 0.004 L 4.4 0.004 C 3.072 -0.075 1.93 0.936 1.85 2.264 Z M 15 6.004 L 14.7 6.004 C 14.155 5.949 13.655 5.679 13.31 5.254 C 13.237 5.147 13.179 5.029 13.14 4.904 L 13.14 2.264 C 13.06 0.94 11.924 -0.07 10.6 0.004 L 10 0.004 L 10 1.004 L 10.61 1.004 C 11.381 0.934 12.066 1.495 12.15 2.264 L 12.15 5.004 C 12.2 5.296 12.308 5.576 12.47 5.824 C 12.659 6.108 12.908 6.347 13.2 6.524 C 12.91 6.7 12.661 6.935 12.47 7.214 C 12.296 7.49 12.183 7.801 12.14 8.124 L 12.14 10.764 C 12.041 11.523 11.362 12.07 10.6 12.004 L 10 12.004 L 10 13.004 L 10.61 13.004 C 11.932 13.073 13.064 12.066 13.15 10.744 L 13.15 8.194 C 13.179 8.039 13.237 7.889 13.32 7.754 C 13.674 7.335 14.175 7.067 14.72 7.004 L 15 7.004 Z M 5 6.004 L 6 6.004 L 6 7.004 L 5 7.004 Z M 7 6.004 L 8 6.004 L 8 7.004 L 7 7.004 Z M 9 6.004 L 10 6.004 L 10 7.004 L 9 7.004 Z"
                    fill="rgb(234,168,3)"
                ></path>
            </svg>
        ),
    },
    {
        name: "css",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.432"
                height="8.001"
            >
                <path
                    d="M 3.263 1.531 C 3.13 1.276 2.886 1.147 2.533 1.147 C 2.359 1.14 2.188 1.196 2.051 1.304 C 1.925 1.408 1.825 1.579 1.753 1.814 C 1.67 2.114 1.619 2.423 1.601 2.734 C 1.573 3.112 1.558 3.575 1.558 4.124 C 1.558 4.709 1.578 5.181 1.618 5.542 C 1.658 5.903 1.718 6.183 1.802 6.382 C 1.885 6.579 1.99 6.713 2.116 6.782 C 2.251 6.853 2.403 6.889 2.555 6.885 C 2.691 6.885 2.82 6.862 2.939 6.815 C 3.07 6.757 3.178 6.658 3.247 6.532 C 3.333 6.392 3.402 6.193 3.453 5.937 C 3.503 5.681 3.529 5.344 3.529 4.925 L 5.087 4.925 C 5.087 5.345 5.055 5.74 4.99 6.116 C 4.935 6.465 4.812 6.8 4.627 7.101 C 4.445 7.387 4.186 7.615 3.88 7.761 C 3.559 7.921 3.142 8.001 2.63 8.001 C 2.046 8.001 1.58 7.905 1.234 7.718 C 0.892 7.535 0.614 7.252 0.438 6.906 C 0.254 6.552 0.135 6.13 0.081 5.64 C 0.024 5.101 -0.003 4.558 0 4.016 C 0 3.431 0.026 2.892 0.08 2.397 C 0.135 1.903 0.254 1.479 0.438 1.127 C 0.617 0.778 0.893 0.49 1.234 0.297 C 1.58 0.1 2.046 0 2.63 0 C 3.186 0 3.624 0.09 3.945 0.27 C 4.265 0.451 4.505 0.68 4.665 0.957 C 4.824 1.237 4.923 1.535 4.963 1.857 C 5.002 2.177 5.022 2.478 5.022 2.76 L 3.462 2.76 C 3.462 2.197 3.397 1.788 3.262 1.531 M 7.23 5.694 C 7.23 5.874 7.244 6.039 7.273 6.187 C 7.297 6.323 7.353 6.451 7.437 6.56 C 7.516 6.66 7.621 6.74 7.756 6.798 C 7.889 6.856 8.056 6.885 8.258 6.885 C 8.494 6.886 8.723 6.803 8.903 6.652 C 9.094 6.497 9.19 6.257 9.19 5.932 C 9.19 5.759 9.166 5.61 9.12 5.482 C 9.07 5.352 8.99 5.236 8.887 5.142 C 8.76 5.029 8.615 4.935 8.459 4.866 C 8.246 4.769 8.027 4.684 7.804 4.612 C 7.494 4.511 7.194 4.384 6.905 4.232 C 6.67 4.108 6.456 3.945 6.273 3.751 C 6.104 3.567 5.976 3.349 5.898 3.111 C 5.815 2.84 5.775 2.557 5.779 2.273 C 5.779 1.508 5.993 0.938 6.419 0.563 C 6.844 0.188 7.429 0 8.172 0 C 8.52 0 8.837 0.037 9.13 0.114 C 9.422 0.19 9.675 0.313 9.888 0.482 C 10.101 0.651 10.268 0.868 10.386 1.131 C 10.505 1.395 10.565 1.71 10.565 2.078 L 10.565 2.295 L 9.07 2.295 C 9.07 1.927 9.005 1.644 8.876 1.445 C 8.746 1.247 8.53 1.147 8.226 1.147 C 8.078 1.143 7.931 1.169 7.794 1.224 C 7.687 1.267 7.592 1.335 7.517 1.423 C 7.449 1.506 7.401 1.605 7.377 1.71 C 7.352 1.82 7.339 1.933 7.338 2.046 C 7.338 2.284 7.39 2.484 7.49 2.646 C 7.591 2.809 7.807 2.959 8.14 3.096 L 9.341 3.616 C 9.637 3.746 9.879 3.881 10.067 4.021 C 10.254 4.163 10.405 4.314 10.517 4.476 C 10.627 4.639 10.706 4.818 10.749 5.012 C 10.792 5.207 10.813 5.422 10.813 5.661 C 10.813 6.478 10.577 7.071 10.104 7.441 C 9.631 7.814 8.974 8 8.129 8 C 7.249 8 6.619 7.809 6.241 7.426 C 5.861 7.044 5.671 6.495 5.671 5.781 L 5.671 5.466 L 7.231 5.466 L 7.231 5.694 Z M 12.849 5.694 C 12.849 5.874 12.863 6.039 12.892 6.187 C 12.916 6.323 12.972 6.451 13.055 6.56 C 13.134 6.66 13.24 6.74 13.374 6.798 C 13.508 6.856 13.674 6.885 13.877 6.885 C 14.113 6.886 14.341 6.803 14.521 6.652 C 14.713 6.497 14.808 6.257 14.808 5.932 C 14.812 5.779 14.788 5.627 14.738 5.482 C 14.688 5.352 14.608 5.236 14.505 5.142 C 14.378 5.029 14.234 4.935 14.078 4.866 C 13.865 4.769 13.646 4.684 13.423 4.612 C 13.113 4.511 12.812 4.384 12.523 4.232 C 12.288 4.108 12.074 3.945 11.891 3.751 C 11.722 3.567 11.595 3.349 11.517 3.111 C 11.433 2.84 11.393 2.557 11.397 2.273 C 11.397 1.508 11.611 0.938 12.037 0.563 C 12.463 0.188 13.047 0 13.791 0 C 14.137 0 14.456 0.037 14.749 0.114 C 15.041 0.19 15.294 0.313 15.507 0.482 C 15.719 0.651 15.886 0.868 16.004 1.131 C 16.123 1.395 16.183 1.71 16.183 2.078 L 16.183 2.295 L 14.689 2.295 C 14.689 1.927 14.624 1.644 14.495 1.445 C 14.364 1.247 14.148 1.147 13.845 1.147 C 13.672 1.147 13.527 1.173 13.412 1.224 C 13.306 1.267 13.211 1.335 13.136 1.423 C 13.067 1.506 13.019 1.605 12.995 1.71 C 12.97 1.82 12.957 1.933 12.957 2.046 C 12.957 2.284 13.007 2.484 13.109 2.646 C 13.209 2.809 13.426 2.959 13.758 3.096 L 14.96 3.616 C 15.256 3.746 15.497 3.881 15.685 4.021 C 15.872 4.163 16.023 4.314 16.135 4.476 C 16.245 4.639 16.324 4.818 16.367 5.012 C 16.411 5.207 16.432 5.422 16.432 5.661 C 16.432 6.478 16.196 7.071 15.722 7.441 C 15.25 7.814 14.592 8 13.747 8 C 12.867 8 12.237 7.809 11.859 7.426 C 11.479 7.044 11.289 6.495 11.289 5.781 L 11.289 5.466 L 12.849 5.466 Z"
                    fill="rgb(7,94,255)"
                ></path>
            </svg>
        ),
    },
    {
        name: "page",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                    d="M 9 0 C 10.053 0 10.918 0.816 10.995 1.851 L 11 2 L 11 12 C 11 13.053 10.183 13.918 9.149 13.995 L 9 14 L 2 14 C 0.947 14 0.082 13.183 0.005 12.149 L 0 12 L 0 2 C 0 0.946 0.817 0.082 1.851 0.005 L 2 0 Z M 9 1 L 2 1 C 1.487 1 1.064 1.385 1.007 1.883 L 1 2 L 1 12 C 1 12.513 1.385 12.935 1.883 12.993 L 2 13 L 9 13 C 9.513 13 9.936 12.614 9.993 12.117 L 10 12 L 10 2 C 10 1.487 9.615 1.064 9.117 1.007 Z M 8 6 L 8 7 L 3 7 L 3 6 Z M 8 3 L 8 4 L 3 4 L 3 3 Z"
                    fill="#162D3D"
                ></path>
            </svg>
        ),
    },
    {
        name: "npm",
        svg: (
            <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M6.151 3.306L7.99 2.162a.983.983 0 0 1 1.059 0l4.48 2.819c.261.16.421.443.461.745-.03.05-.08.09-.12.12l-1.806 1.108-5.913-3.648zM14 10.144c0 .346-.177.668-.467.852l-4.48 2.842c-.017.011-.036.015-.053.024V9.93a1.7 1.7 0 0 0 .39-.178l4.61-2.9v3.292zm-10.531.85A1.008 1.008 0 0 1 3 10.14V6.852l4.609 2.9c.125.079.256.135.391.178v3.915l-.011-.005-4.52-2.847zm.003-6.01l1.742-1.086 5.895 3.644L8.94 8.885a.857.857 0 0 1-.88 0l-4.93-3.04c-.054-.035-.082-.073-.116-.115a1 1 0 0 1 .458-.746zm10.589-.856L9.58 1.307a1.99 1.99 0 0 0-2.116-.004l-4.52 2.826A2.016 2.016 0 0 0 2 5.84v4.302c0 .693.355 1.337.939 1.706l4.52 2.847c.65.41 1.477.408 2.127-.004l4.48-2.842A2.018 2.018 0 0 0 15 10.144V5.835c0-.694-.355-1.338-.939-1.707z"></path>
            </svg>
        ),
    },
]