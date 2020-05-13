import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';

import { View, Text, Button, TextInput, StyleSheet, CheckBox, Switch, Dimensions, style, Image, TouchableHighlight, ImageBackground } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category.js';

import TallCategory from './tallCategory.js';
import WideCategory from './wideCategory';
import NavigationService from './NavigationService.js'


class ConnectScreen extends React.Component {

    renderHeader = () =>{
        return(
            <ImageBackground source={require('../../images/activities-min.png')}
                style={{ height: 400 }}
            >
                <Text style={{ fontSize: 30, paddingTop: 60, color: 'white', paddingLeft: 25 }}>Explore Kikori</Text>
                <View style={{ height: 245 }}></View>
            </ImageBackground>

        );
    };
   


  renderFeatOrgs = () =>{
      return(
          <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                  horizontal={true}>
                  <TouchableHighlight onPress={() => navigation.navigate('Grid')}>
                      <Category imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                          name="Org name"
                      />
                  </TouchableHighlight>
                  <Category imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                      name="Org name"
                  />
                  <Category imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                      name="Org name"
                  />
                  <Category imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
                      name="Org name"
                  />

              </ScrollView>
          </View>
      );
  };

  renderFeatEvents = () =>{
      return (
          <View>
          <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-evenly' }}>
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

  renderFeatWorkshop = () =>{
      return (
          <View style = {{paddingVertical:16}}>
      <WideCategory imageUri={require('../../images/valleyTaurusMountainsTurkeyb2bef5a0.png')}
          name="workshop name"
          price="$400"
          location="Boston, MA"
          rev="5 Stars"
          prof="Teachers"
          />
          </View>
      );
      

  };

  renderViewContent = () => {
      return(
          <>
             
          {this.renderHeader()}
             
              <Text style={{ fontSize: 18, paddingLeft: 38, fontWeight: 'bold' }}>Featured Organizations</Text>
          {this.renderFeatOrgs()}
              <Text style={{ fontSize: 18, paddingLeft: 38, fontWeight: 'bold', paddingTop: 20 }}>Featured Events</Text>
          {this.renderFeatEvents()}
              <Text style={{ fontSize: 18, paddingLeft: 38, fontWeight: 'bold', marginTop: 70 }}>Featured Workshops</Text>

          {this.renderFeatWorkshop()}


          </>

      );

  };


   render () {
       return (
           <ScrollView
               style={{ backgroundColor: '#EEE7FA'}}
           >
           {this.renderViewContent()}
           </ScrollView>
       );
   }




}

export default ConnectScreen;







