import React from "react";
import { TouchableOpacity } from "react-native";

export default class PrimaryTouchable extends React.PureComponent {

    static defaultProps = {
        activeOpacity: 0.5,
    };

    constructor(props) {
        super(props);
    }

    onPress = () => {
        this.props.onPress && this.props.onPress();
    };

    render() {
        return (
            <TouchableOpacity
                {...this.props}
                activeOpacity={this.props.activeOpacity}
                onPress={this.onPress}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}