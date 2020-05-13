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


class EventScreen extends React.Component {

    renderHeader = () => {
        return (
            <ImageBackground source={require('../../images/activities-min.png')}
                style={{ height: 400 }}
            >
                <Text style={{ fontSize: 30, paddingTop: 60, color: 'white', paddingLeft: 25 }}>Events</Text>
                <View style={{ height: 245, alignSelf: 'center', paddingTop: 15 }}>
                    <EventCategory imageUri={require('../../images/books.jpg')}
                    //Photo by Kimberly Farmer on Unsplash
                        name="For Schools"
                        sent="For Schools"
                        blurb="Activities and events for schools across the globe"
                        font="Zapfino"
                    />
                </View>
            </ImageBackground>

        );
    };

    renderWideCategory = () => {
        return (
            <View style={{ paddingTop: 75, alignSelf: 'center' }}>
                <EventCategory imageUri={require('./playground.jpg')}
                    name="For Kids"
                    sent="For Kids"
                    blurb="Activities and events for kids across the globe"
                    font="AvenirNext-Bold"
                />
                
                <EventCategory imageUri={require('../../images/home.jpg')}
                    name="For Families"
                    sent="For Families"
                    blurb="Activities and events for families across the globe"
                    font="American Typewriter"
                />
                
            </View>
        );


    };
    renderFeatEvents = () => {
        return (
            <View>
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
                <View style={{ flexDirection: 'row', paddingTop: 45, justifyContent: 'space-evenly' }}>
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

    renderUpcoming = () => {
        return (
            <View style = {{marginVertical: 30}}>
            <ScrollView 
            horizontal={true}>
                <ListCategory
                name="Enviromental Education"/>
                <ListCategory
                    name="Nature" />
                <ListCategory
                    name="Challenge Courses" />
                <ListCategory
                    name="Culinary Events" />
                <ListCategory
                    name="Camps" />
                <ListCategory
                    name="Art and Culture" />
               


            </ScrollView>
            </View>
        );
    };

    renderViewContent = () => {
        return (
            <>
                {this.renderHeader()}
            
                {this.renderWideCategory()}
                <Text style={{ fontSize: 17, paddingTop: 12, fontWeight: 'bold', paddingLeft: 25 }}>Upcoming events in your area</Text>
                {this.renderFeatEvents()}
                <Text style={{ fontSize: 17, marginTop: 60, fontWeight: 'bold', paddingLeft: 25 }}>Event Types</Text>
                {this.renderUpcoming()}




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

export default EventScreen;
