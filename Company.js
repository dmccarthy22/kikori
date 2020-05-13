
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native"

class Company extends Component {
    render() {
        return (
            <View style ={{flex:1}}>
            <View style={{ height: 250, borderWidth: 0.5, borderColor: '#dddddd' }}>
           
                <View style={{ flex: 6 }}>
                    <Image source={this.props.img}
                        style={{ flex: 1, height: null, width:null, paddingLeft: 200, }}
                    />
                </View>
            </View>
                <Text style={{ fontSize: 50, fontWeight: '700', color: 'gray' }}>{this.props.name}</Text>
                <Text style={{ fontSize: 25, color: 'gray'}}>{this.props.address}</Text>
                <Text style={{ fontSize: 20, paddingVertical: 10, color: 'gray' }}>{this.props.contact}</Text>
                <Text style={{ fontSize: 20, color: 'gray', paddingHorizontal: 5 }}>{this.props.email}</Text>
                <Text style={{ fontSize: 20, color: 'gray', paddingHorizontal: 5 }}>{this.props.number}</Text>
                <Text style={{ fontSize: 20, color: 'gray', paddingHorizontal: 5}}>{this.props.misison}</Text>
                <Text style={{ fontSize: 20, color: 'blue', paddingHorizontal: 5 }}>{this.props.website}</Text>

            </View>
            
           
        )
    }

}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        
    }
    



})


export default Company;