import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import styled from "styled-components"

interface Props {
    value: string
    onValueChange: (value: string) => void
    placeholder: string
    backgroundColor: string
    textColor: string
    focusColor: string
    fontSize: number
    width: number
    height: number
    radius: number
    border: string
    borderWidth: number
    multiLine: boolean
    password: boolean
    autoFocus: boolean
}

interface State {
    value: string
    valueFromProps: string
}

export class Input extends React.Component<Partial<Props>, State> {
    static defaultProps = {
        value: "",
        placeholder: "",
        backgroundColor: "#FFF",
        textColor: "#000",
        focusColor: "#3899EC",
        fontSize: 12,
        radius: 6,
        multiLine: false,
        password: false,
        border: "1px solid #3899EC",
        borderWidth: 1,
        width: 190,
        autoFocus: true,
    }

    state = {
        value: Input.defaultProps.value,
        valueFromProps: Input.defaultProps.value,
    }

    // Allow setting the Value from within the property panel.
    static getDerivedStateFromProps(props: Props, state: State) {
        if (props.value !== state.valueFromProps) {
            return { value: props.value, valueFromProps: props.value }
        } else {
            return null
        }
    }

    onChange = (event: React.ChangeEvent) => {
        const element = this.props.multiLine
            ? (event.nativeEvent.target as HTMLTextAreaElement)
            : (event.nativeEvent.target as HTMLInputElement)

        const value = element.value

        this.setState({ value })

        if (this.props.onValueChange) {
            this.props.onValueChange(value)
        }
    }

    StyledInput = this.props.multiLine
        ? styled.textarea`
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `
        : styled.input`
        &:focus {
          box-shadow: inset 0 0 0 ${this.props.borderWidth}px
            ${this.props.focusColor} !important;
        }
      `

    render() {
        const {
            placeholder,
            backgroundColor,
            textColor,
            fontSize,
            radius,
            border,
            borderWidth,
            password,
            width,
            autoFocus,
        } = this.props

        const { value } = this.state

        return (
            <this.StyledInput
                onChange={this.onChange}
                value={value}
                placeholder={placeholder}
                style={{
                    ...style,
                    backgroundColor,
                    boxShadow: `inset 0 0 0 ${borderWidth}px ${border}`,
                }}
                type={password ? "password" : "text"}
                autoFocus={autoFocus}
            />
        )
    }
}

const style: React.CSSProperties = {
    border: "none",
    height: 22,
    padding: "8px",
    position: "absolute",
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    borderRadius: 6,
    outline: "none",
    resize: "none",
    color: "#d0427d",
    fontFamily: "Menlo, Monaco, Courier New, monospace",
}
