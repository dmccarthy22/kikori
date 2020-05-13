import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native"


class Tile extends Component {
    render() {
        return (
            <View style={{ height: 130,  marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', flexDirection: 'row' }}>
                <View style={{ flex: 1, paddingLeft: 30, paddingTop: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: '700'}}>{this.props.name}</Text>

                </View>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 130, height: null, paddingLeft: 200,  }}
                    />


                </View>


            </View>
        )
    }

}
export default Tile;