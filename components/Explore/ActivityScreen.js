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
import Carousel from 'react-native-snap-carousel';
import Category from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Category.js';
import GridScreen from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Grid.js'
import { exportNamedDeclaration } from '@babel/types';
import Web from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Web.js'
import ManitoScreen from '/Users/danmccarthy/Downloads/react/multi/components/Explore/manito.js';
import Explore1 from '/Users/danmccarthy/Downloads/react/multi/components/Explore/explore1/explore1.js';
import Explore from '/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/explore.js';
import Workshops from '/Users/danmccarthy/Downloads/react/multi/components/Explore/workshops/workshops.js';
import TallCategory from '/Users/danmccarthy/Downloads/react/multi/components/Explore/tallCategory.js';
import WideCategory from './wideCategory';


class OrganizationsScreen extends React.Component {

    renderHeader = () => {
        return (
            <ImageBackground source={require('/Users/danmccarthy/Downloads/react/multi/images/activities-min.png')}
                style={{ height: 400 }}
            >
                <Text style={{ fontSize: 30, paddingTop: 60, color: 'white', paddingLeft: 25 }}>Events</Text>
                <View style={{ height: 245 }}></View>
            </ImageBackground>

        );
    };





    renderActivities = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-evenly' }}>
                    <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/climb.jpg')}
                        name="Climbing"
                    />
                    <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/horseback.jpg')}
                        name="Horseback"
                    />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 45, justifyContent: 'space-evenly' }}>
                    <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                        name="Hiking"
                    />
                    <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/ski.jpg')}
                        name="Skiing"
                    />
                </View>
            </View>

        );
    };

    renderWideCategory = () => {
        return (
            <View style={{ paddingVertical: 12 }}>
                <WideCategory imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                    name="Organization Name"
                    price="$400"
                    location="Boston, MA"
                    rev="5 Stars"
                    prof="Teachers"
                />
                <WideCategory imageUri={require('/Users/danmccarthy/Downloads/react/multi/components/Explore/explore/assets/valleyTaurusMountainsTurkeyb2bef5a0.png')}
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
            <ScrollView>
                {this.renderViewContent()}
            </ScrollView>
        );
    }
}

export default OrganizationsScreen;
