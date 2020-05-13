import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Button, TextInput, StyleSheet, CheckBox, Switch, Dimensions, style, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import { SectionGrid } from 'react-native-super-grid';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';

import TallCategory from './tallCategory.js';
import EventCategory from './eventCategory.js';
import ListCategory from './ListCategory.js';
import Category from './Category.js';

class WorkshopScreen extends React.Component {

    renderHeader = () => {
        return (
            <ImageBackground source={require('../../images/activities-min.png')}
                style={{ height: 400 }}
            >
                <Text style={{ fontSize: 30, paddingTop: 60, color: 'white', paddingLeft: 25 }}>Workshops</Text>
                <Text style={{ fontSize: 19, paddingTop: 12, color: 'white', paddingLeft: 25 }}>Workshops under $100</Text>

                <View style={{ height: 245, alignSelf: 'center', marginBottom: 50 }}>
                    <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-evenly' }}>
                        <TallCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                            name="workshop name"
                            price="$400"
                            location="Boston, MA" />
                        <TallCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                            name="workshop name"
                            price="$400"
                            location="Boston, MA" />
                    </View>
                </View>
            </ImageBackground>

        );
    };

   
    renderFeatWorkshops = () => {
        return (
            <View>
                
                <View style={{ flexDirection: 'row', marginTop: 120, justifyContent: 'space-evenly' }}>
                    <TallCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                        name="workshop name"
                        price="$400"
                        location="Boston, MA" />
                    <TallCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                        name="workshop name"
                        price="$400"
                        location="Boston, MA" />
                </View>
            </View>

        );
    };

    renderLocation = () => {
        return (
            <View style={{ marginTop: 30 }}>
                <ScrollView
                    horizontal={true}>
                    <ListCategory
                        name="Local" />
                    <ListCategory
                        name="State" />
                    <ListCategory
                        name="Region" />
                    <ListCategory
                        name="Countrywide" />
                    <ListCategory
                        name="Worldwide" />
                    



                </ScrollView>
            </View>
        );
    };

    renderInterests = () => {
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

    renderProfession = () => {
        return (
            <View style={{ marginTop: 30 }}>
                <ScrollView
                    horizontal={true}>
                    <ListCategory
                        name="Elementary School" />
                    <ListCategory
                        name="Middle School" />
                    <ListCategory
                        name="High School" />
                    <ListCategory
                        name="College" />
                    <ListCategory
                        name="Principals" />




                </ScrollView>
            </View>
        );
    };

    renderViewContent = () => {
        return (
            <>
                {this.renderHeader()}

               
                
                {this.renderFeatWorkshops()}
                <Text style={{ fontSize: 20, marginTop: 60, fontWeight: 'bold', paddingLeft: 25 }}>Event Types</Text>
                {this.renderLocation()}
                <Text style={{ fontSize: 20, marginTop: 30, fontWeight: 'bold', paddingLeft: 25 }}>Workshops by interst</Text>
                {this.renderInterests()}
                <Text style={{ fontSize: 20, marginTop: 30, fontWeight: 'bold', paddingLeft: 25 }}>Workshops by profession</Text>
                {this.renderProfession()}



            </>

        );

    };
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#EEE7FA' }}>
                {this.renderViewContent()}
            </ScrollView>
        );
    }
}

export default WorkshopScreen;
