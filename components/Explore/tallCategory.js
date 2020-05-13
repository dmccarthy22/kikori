import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image

} from "react-native"


class TallCategory extends Component {
    render() {
        return (
            <View style={{ height: 294, width: 149, marginLeft: 20,  backgroundColor: 'transparent', marginVertical: 15 }}>
                <View style={{ }}>
                    <Image source={this.props.imageUri}
                        style={{  height: 260, width: 149 }}
                    />


                </View>
                <View style={{  paddingTop: 10, marginBottom: 20, height: 70 }}>
                    <Text style={{ fontSize: 14, paddingLeft: 11, marginTop: 8 }}>{this.props.location}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 11, marginTop: 8 }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 14, paddingLeft: 11, marginTop: 8 }}>{this.props.price}</Text>

                </View>

            </View>
        )
    }

}
export default TallCategory;
