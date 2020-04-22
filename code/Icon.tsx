import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import FeatherIcon from "feather-icons-react"
import MaterialIcon from "material-icons-react"

// Define type of property
interface Props {
    icon: string
    width: number
    height: number
    color: string
    set: "feather" | "material"
    visible: boolean
}

export class Icon extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        icon: "code",
        width: 24,
        height: 24,
        color: "#000",
        set: "feather",
        visible: true,
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        set: {
            type: ControlType.Enum,
            title: "Set",
            options: ["feather", "material"],
            optionTitles: ["Feather", "Material"],
        },
        icon: { type: ControlType.String, title: "Icon" },
        color: { type: ControlType.Color, title: "Color" },
    }

    render() {
        let RenderIcon = (props: { set: string }) => {
            let name = `${this.props.icon.toLowerCase()}`
            let faName =
                "fa" +
                `${this.props.icon.charAt(0).toUpperCase()}` +
                `${this.props.icon.substr(1)}`

            if (props.set === "feather") {
                return (
                    <FeatherIcon
                        icon={name}
                        width={this.props.width}
                        height={this.props.height}
                        color={this.props.color}
                    />
                )
            }
            if (props.set === "material") {
                return (
                    <MaterialIcon
                        icon={name}
                        size={this.props.width}
                        color={this.props.color}
                    />
                )
            }
        }

        return (
            <div>
                <RenderIcon set={this.props.set} />
            </div>
        )
    }
}
