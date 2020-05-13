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
import { SearchBar } from 'react-native-elements';

import TallCategory from './tallCategory.js';
import EventCategory from './eventCategory.js';
import ListCategory from './ListCategory.js';


class ComponentScreen extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    renderSearchbar = () => {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            
            />
            

        );
    };

 

    renderViewContent = () => {
        return (
            <>
                {this.renderSearchbar()}

                




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

export default ComponentScreen;
