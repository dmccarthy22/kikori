import React, { Component } from "react";
import { FlatGrid } from 'react-native-super-grid';
import Example from '/Users/danmccarthy/Downloads/react/multi/App.js';
import Category from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Category.js';
import Manito from '/Users/danmccarthy/Downloads/react/multi/components/Explore/manito.js';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native"
import { ScrollView } from "react-native-gesture-handler";

function GridScreen({ route, navigation }) {
    const items = [
        { name: 'Camp Manito-Wish YMCA', code: '#1abc9c', path: 'Manito', type: 'Summer Camp' }, 
        { name: 'Jump on In', code: '#2ecc71', path: 'Example', type: 'Attraction' }, 
        { name: 'SkyZone', code: '#34495e', path: 'Example', type: 'Attraction' },
        { name: 'Camp Mattawanakee', code: '#16a085', path: 'Example', type: 'Summer Camp' }, 
        { name: 'One Stop Fun', code: '#f39c12', path: 'Example', type: 'Summer Camp' }, 
    ];

    return (
        <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (
                <TouchableHighlight onPress={() => navigation.navigate(item.path)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.type}</Text>
                </View>
                </TouchableHighlight>
            )}
        />
    );
}
const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
export default GridScreen;