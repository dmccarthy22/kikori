import React, { Component } from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
    
} from "react-native"


class Category extends Component{
    render(){
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', backgroundColor: 'white', borderRadius: 15 }}>
                <View style={{ flex: 1 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                    />


                </View>
                <View style={{ alignContent: 'center', alignSelf: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10, height: 40 }}>
                    <Text style = {{fontWeight: 'bold'}}>{this.props.name}</Text>

                </View>

            </View>
        )
    }
    
}
export default Category;
