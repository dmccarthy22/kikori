import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image

} from "react-native"


class Activity extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 3.5, borderColor: '#dddddd', backgroundColor: this.props.col, borderRadius: 25, alignItems: 'center', alignContent: 'center' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{  width: 80, height: 80, resizeMode: 'cover' }}
                    />


                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 18 }}>
                    <Text style={{ color: 'white' }}
                        >
                        {this.props.name}
            </Text>

                </View>

            </View>
        )
    }

}
export default Activity;
