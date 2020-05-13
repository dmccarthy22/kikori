import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image

} from "react-native"


class ListCategory extends Component {
    render() {
        return (
            <View style = {{height: 85, width: 150, backgroundColor: 'white', alignContent: 'center', borderRadius: 15, marginHorizontal: 15, justifyContent: 'center'}}>
                <Text style = {{fontSize: 18, alignSelf: 'center'}}>{this.props.name}</Text>



            </View>
        )
    }

}
export default ListCategory;
