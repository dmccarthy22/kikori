import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, CheckBox, Switch, Dimensions, style, Image, TouchableHighlight, ImageBackground, SearchBar } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category.js';

import WideCategory from './wideCategory';


class OrganizationsScreen extends React.Component {

    renderHeader = () => {
        return (
            <ImageBackground source={require('../../images/activities-min.png')}
                style={{ height: 400 }}
            >
                <Text style={{ fontSize: 30, paddingTop: 60, color: 'white', paddingLeft: 25 }}>Organizations</Text>
                <Text style={{ fontSize: 17, paddingTop: 12, color: 'white', paddingLeft: 25 }}>What are you looking for?</Text>
                <View style={{ height: 245 }}></View>
            </ImageBackground>

        );
    };





    renderActivities = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-evenly' }}>
                    <Category imageUri={require('../../images/climb.jpg')}
                        name="Climbing"
                        />
                    <Category imageUri={require('../../images/horseback.jpg')}
                        name="Horseback"
                         />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 45, justifyContent: 'space-evenly' }}>
                    <Category imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                        name="Hiking"
                        />
                    <Category imageUri={require('../../images/ski.jpg')}
                        name="Skiing"
                        />
                </View>
            </View>

        );
    };

    renderWideCategory = () => {
        return (
            <View style={{ paddingVertical: 12, alignSelf: 'center', justifyContent:'flex-start' }}>
                <WideCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
            </View>
        );


    };

    renderViewContent = () => {
        return (
            <>
                {this.renderHeader()}
                <Text style={{ fontSize: 15, paddingLeft: 38, fontStyle: 'italic', paddingTop: 20 }}>Activities</Text>
                {this.renderActivities()}
                {this.renderWideCategory()}


            </>

        );

    };
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#EEE7FA'}}>
                {this.renderViewContent()}
            </ScrollView>
        );
    }
}

export default OrganizationsScreen;
