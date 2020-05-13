import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image

} from "react-native"


class WideCategory extends Component {
    render() {
        return (
            <View style={{ height: 248, width: 325, marginLeft: 20, backgroundColor: 'transparent', marginVertical: 25, backgroundColor: 'white', borderTopLeftRadius:19, borderTopRightRadius: 19 }}>
                <View style={{}}>
                    <Image source={this.props.imageUri}
                        style={{ height: 172, width: 325, borderRadius: 19 }}
                    />


                </View>
                <View style={{ flexDirection: 'row', marginVertical: 12, marginHorizontal: 6, justifyContent: 'space-between', backgroundColor: 'white'}}>
                    <Text style ={{fontSize: 18}}>{this.props.name}</Text>
                    <Text style={{ fontSize: 14 }}>{this.props.price}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginHorizontal: 6}}>
                    <Text style={{ fontSize: 14 }}>{this.props.prof}</Text>
                    <Text style={{ fontSize: 14 }}>{this.props.rev}</Text>
                </View>
                <View style={{ justifyContent: 'space-between', backgroundColor: 'white',  }}>
                    <Text style={{ fontSize: 14, marginVertical: 5, marginHorizontal: 6 }}>{this.props.location}</Text>
                    
                </View>
               

            </View>
        )
    }

}
export default WideCategory;