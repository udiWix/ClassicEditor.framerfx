import * as React from "react"
import { PropertyControls, ControlType, Frame, Stack } from "framer"
import styled, { ThemeProvider } from "styled-components"
// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

interface Props {
    text: string
    type: string
    borderRadius: number
    onClick: () => void
}

const Primary = {
    backgroundColor: "#3899EC",
    hoverColor: "#4EB7F5",
    color: "#ffffff",
    fontHover: "#ffffff",
}

const Secondery = {
    backgroundColor: "#eaf7ff",
    hoverColor: "#D3EDFF",
    color: "#3899ec",
    fontHover: "#3899EC",
}

const ButtonContainer = styled.div`
    position: relative;
    width:auto;
    padding: 0 18px;
    height: 30px;
    font-family:HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;
    font-size:14px;
    line-height:14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(p: Partial<Props>) => p.theme.color};
    border-radius: ${(p: Partial<Props>) => p.borderRadius}px;
    background-color: ${(p: Partial<Props>) => p.theme.backgroundColor};
    &:hover {
        background-color: ${(p: Partial<Props>) => p.theme.hoverColor};
        color: ${(p: Partial<Props>) => p.theme.fontHover};
    }
`

export class Button extends React.Component<Props> {
    static defaultProps = {
        type: "Primary",
        text: "Hello World!",
        borderRadius: 15,
        onClick: () => {},
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        borderRadius: { type: ControlType.Number, title: "Radius" },
        type: {
            type: ControlType.Enum,
            title: "Type",
            options: ["Primary", "Secondery"],
            optionTitles: ["Primary", "Secondery"],
        },
    }

    render() {
        return (
            <ThemeProvider theme={eval(this.props.type)}>
                <Stack alignment="start">
                    <ButtonContainer
                        onClick={this.props.onClick}
                        borderRadius={this.props.borderRadius}
                    >
                        {this.props.text}
                    </ButtonContainer>
                </Stack>
            </ThemeProvider>
        )
    }
}
