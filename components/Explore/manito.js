import React, { Component } from "react";
import { FlatGrid } from 'react-native-super-grid';
import Example from '/Users/danmccarthy/Downloads/react/multi/App.js';
import Category from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Category.js';
import { Linking } from 'expo';
import { WebView } from 'react-native-webview';
import Web from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Web.js';
import Activity from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Activity.js';


import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    
} from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import { black } from "ansi-colors";


function ManitoScreen({ route, navigation }) {
    const orgName = 'Camp Manito-Wish YMCA';
    const type = ' Outdoor and Adventure';
    const location = ' Boulder Junction, WI';
    const duration = 'One Week';
    const age = 'Grades 5-12';
    const price = '$250/week';
return (
    <React.Fragment>
    <ScrollView style = {{backgroundColor: 'white', flex: 1}}>
        <Image source={require('/Users/danmccarthy/Downloads/react/multi/images/wilderness.jpg')}
        style={{height: 325}}/>     
        <View style={{ flexDirection: 'row', paddingTop: 20}}>
        <Text style={{color:'black', fontSize: 22, paddingRight: 60, }}>{type}</Text>
            <View style={{ height: 45, width: 80, backgroundColor: '#5E2DD9', justifyContent: "center", alignItems: 'center', borderRadius: 10 }}>
            <Text style={{ color: 'white' }}
                    onPress={() =>  navigation.navigate('Web')}>
                Website
            </Text>
        </View>
        </View>  
        <Text style={{ color: 'black', fontSize: 35, paddingRight: 50 }}>{orgName}</Text>
        <View style = {{flexDirection: 'row'}}>
        
            <Text style={{ color: 'black', fontSize: 22, paddingRight: 70 }}>{location}</Text>
            <View style={{ width: 90, height: 38, backgroundColor: '#5E2DD9', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ color: 'white' }}
                    onPress={() => Linking.openURL('https://manito-wish.org/')}>
                    More Locations
            </Text>
            </View>
        </View>
        <View style={{height: 40, width: 70}}>
        <Image source={require('/Users/danmccarthy/Downloads/react/multi/images/best.png')}
                style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain'}}
        ></Image>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{ backgroundColor: '#E54060', alignSelf: 'flex-start', fontSize: 18, paddingHorizontal: 5, marginHorizontal: 10, borderRadius: 10}}>Summer Camp</Text>
            <Text style={{ backgroundColor: '#E54060', alignSelf: 'flex-start', fontSize: 18, paddingHorizontal: 5, marginHorizontal: 10 }}>Leadership</Text>
        </View>

    
        <Text style={{ color: 'black', fontSize: 22, paddingVertical: 10 }}> Mission</Text>
        <Text style={{ color: 'black', fontSize: 14, paddingHorizontal: 5 }}> When Camp Manito-wish YMCA was founded in 1919, formalized mission and vision statements were still decades away. But the core beliefs and philosophy that we embrace today were here from the very start. Our camp founder, W.H. “Daddy” Wones, was a man of strong conviction who believed that camp life should promote physical strength, spiritual growth and a strong commitment to service. Today, our vision and mission reflects that wonderful heritage. We’re proud to continue traveling the trail that Wones blazed, honoring the past while igniting our hopes and dreams for the future.</Text>
        <Text></Text>
        <View style= {{height: 0.5, backgroundColor: 'gray'}}></View>
        <View style = {{flexDirection: 'row', alignItems: 'center', paddingVertical: 5, justifyContent: 'center'}}>
            <Text style = {{paddingHorizontal: 60, color: 'black'}}>Duration</Text>
            <Text style={{ paddingHorizontal: 60, color: 'black' }}>Ages</Text>

        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 20, alignContent: 'center', paddingLeft: 30 }}>

            <Image source={require('/Users/danmccarthy/Downloads/react/multi/images/clock-2.png')}
                style={{
                    paddingHorizontal: 70,
                    width: 25,
                    height: 25,
                    resizeMode: 'contain'
                }}
            ></Image>
            <View style={{ height: 25, width: 25 }}>
                <Image source={require('/Users/danmccarthy/Downloads/react/multi/images/user-2.png')}
                    style={{
                        paddingHorizontal: 110,
                        width: 25,
                        height: 25,
                        resizeMode: 'contain'
                    }}
                ></Image>
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, justifyContent: 'center' }}>
            <Text style={{ paddingHorizontal: 50, color: 'black' }}>{duration}</Text>
            <Text style={{ paddingHorizontal: 40, color: 'black' }}>{age}</Text>

        </View>
       
        <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
        <Text style={{ color: 'black', fontSize: 24, paddingVertical: 20, paddingLeft: 10 }}>Activities</Text>
        <View >
        <ScrollView horizontal={true}>
           
                <TouchableHighlight onPress={() => navigation.navigate('Grid')}>
                    <Activity imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayak.png')}
                        name="Kayaking"
                        col='#5E2DD9'
                    />
                    
                </TouchableHighlight>
                <Activity imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/climbing.png')}
                    name="Climbing"
                    col='#E54060'
                />



        </ScrollView>
        </View>
        <Text></Text>
        <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
        <Text style={{ color: 'black', fontSize: 24, paddingVertical: 10, paddingLeft: 10 }}>About Us</Text>
        <Text style={{ color: 'black', fontSize: 14, paddingHorizontal: 10, paddingVertical: 10 }}> When Camp Manito-wish YMCA was founded in 1919, formalized mission and vision statements were still decades away. But the core beliefs and philosophy that we embrace today were here from the very start. Our camp founder, W.H. “Daddy” Wones, was a man of strong conviction who believed that camp life should promote physical strength, spiritual growth and a strong commitment to service. Today, our vision and mission reflects that wonderful heritage. We’re proud to continue traveling the trail that Wones blazed, honoring the past while igniting our hopes and dreams for the future.</Text>
        <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
        <Text style={{ color: 'black', fontSize: 25, paddingVertical: 10, paddingLeft: 10 }}>Pricing Options</Text>
        <Text style={{ color: 'black', fontSize: 18, paddingVertical: 10, paddingLeft: 10 }}>{price}</Text>




        
    </ScrollView>
        <View style={{ height: 60, backgroundColor: '#E54060', flexDirection: 'row', alignItems: 'center'}}>
            <View style ={{width: 180, paddingLeft:10}}>
            <Text style ={{color: 'white', fontSize: 20, paddingHorizontal: 8}}>{orgName}</Text>
            </View>
            <View style = {{width: 100}}>

            </View>
            <TouchableHighlight
                onPressonPress={() => Linking.openURL('mailto:mailto@djmccarthy32@gmail.com')}
            >
                <View style={{ height: 30, width: 75, backgroundColor: '#5E2DD9', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style ={{color: 'white'}}>Contact

                    </Text>

                </View>
            </TouchableHighlight>

    </View>
    </React.Fragment>
    
    
    

);

}

export default ManitoScreen;


