import React, { Component } from "react";
import { WebView } from 'react-native-webview';


import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native"
import { ScrollView } from "react-native-gesture-handler";

function Web({ route, navigation }) {
    return(
        <WebView
            source={{ uri: 'https://manito-wish.org/'}}
            style={{ marginTop: 20, flex: 1}}
        />
    )
}

export default Web;