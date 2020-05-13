import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground

} from "react-native"


class EventCategory extends Component {
    render() {
        return (
            <View style={{ height: 325, width: 375, marginLeft: 20, backgroundColor: 'transparent', borderRadius: 25 }}>
                <View style={{}}>
                    <ImageBackground source={this.props.imageUri}
                        style={{ height: 242, width: 364, borderRadius: 19}}
                    >
                    <Text style = {{marginTop: 100, fontSize: 50, color: 'white', fontFamily: this.props.font, alignSelf: 'center'}}>{this.props.name}</Text>

</ImageBackground>
                </View>
                <View style={{  marginVertical: 12, marginHorizontal: 6, }}>
                    <Text style={{ fontSize: 18 }}>{this.props.sent}</Text>
                    <Text style={{ fontSize: 15 }}>{this.props.blurb}</Text>
                </View>
            </View>
        )
    }

}
export default EventCategory;