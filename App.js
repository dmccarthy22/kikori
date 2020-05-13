
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
import Tile from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Tile.js';
import Company from '/Users/danmccarthy/Downloads/react/multi/Company.js'
import GridScreen from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Grid.js'
import { exportNamedDeclaration } from '@babel/types';
import Web from '/Users/danmccarthy/Downloads/react/multi/components/Explore/Web.js'


import ManitoScreen from '/Users/danmccarthy/Downloads/react/multi/components/Explore/manito.js';
import ConnectScreen from './components/Explore/connect';
import OrganizationsScreen from './components/Explore/organizations';
import EventScreen from './components/Explore/events';
import WorkshopScreen from './components/Explore/workshops'
import ComponentScreen from './components/Explore/Components.js';



//
// THIS FILE IS MOSTLY A FIRST ROUGH DRAFT. MOST OF THE OTHER SCREENS AND FILES
// ARE TOO. THE MAIN USE OF THIS FILE IS THE NAVIGATION AT THE BOTTOM.
// THE MOST LATEST DRAFTS ARE ON FILES :
// connect.js, organizations.js, events.js, workshops.js
// There are also many card types etc. 
// This is a project started with Expo
// Created by Dan McCarthy, UNH CS 2022
// djmccarthy32@gmail.com
// 



function HomeScreen({ navigation, route }) {
  // React.useEffect(() => {
  //   if (route.params ?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params ?.post]);
  return (
   
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <ImageBackground source={require('/Users/danmccarthy/Downloads/react/multi/images/activities-min.png')}
      style ={{flex: 1}}
      >

     

    <ScrollView>
   
    
      <View style ={{flexDirection: 'row'}}>
        <Image style = {{height: 45, width: 45}}
            source={require('/Users/danmccarthy/Downloads/react/multi/images/profile.png')}
        />
      <TextInput
        placeholder="Try searching 'Boston, MA'"
        style={{ height: 45, width: 275, padding: 10, paddingRight: 70, backgroundColor: 'white', borderRadius: 15 }}
        
        />
        <TouchableHighlight onPress={() => navigation.navigate('Organization')}>
          <Image style = {{height: 45, width: 45}}
            source={require('/Users/danmccarthy/Downloads/react/multi/images/marker.png')}
          />
        </TouchableHighlight>
      </View>
    <View style={{ flex: 1, paddingLeft: 20  }}>
      <ScrollView
      scrollEventThrottle={16}
      >
        <View style ={{flex:1, paddingTop: 20}}>
          <View style = {{flexDirection: 'row'}}>
          <Text style={{fontSize:20, fontWeight: '700', paddingHorizontal: 20, color: 'white'}}>
            What are you looking for?
          </Text>
          <Button
          style ={{color: 'white'}}
          title="connect"
          
          onPress={() => navigation.navigate('Connect')}
          
          />
                  <Button
                    style={{ color: 'white' }}
                    title="home all"

                    onPress={() => navigation.navigate('Connect')}

                  />
          </View>
              <View style={{ height: 130, marginTop: 20}}>
            <ScrollView
            horizontal={true}>
              <TouchableHighlight onPress={() => navigation.navigate('Grid')}>
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
              name="Half Day Programs" 
              />
                  </TouchableHighlight>
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Single Day Programs"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Multiple Day Programs"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="End of season celebrations"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Overnight camps"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Week long expiditions"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Mentoring programs"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Family programs"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Summer camps"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="In-school teambuilding"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="In-school training"
              />
              <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
                name="Workshops in the community"
              />

            </ScrollView>
          </View>
          </View>
      </ScrollView>

        <View style={{ flexDirection: 'row', paddingTop: 20}}>
        <Text style={{ fontSize: 24, fontWeight: '700', color: 'white' }}>
          Activities
          </Text>
          <Button style = {{paddingHorizontal: 20, paddingLeft: 80}}
          title="See all"
            onPress={() => navigation.navigate('Activities')}
        />
        </View>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView
            horizontal={true}>
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/outdoor.jpg')}
              name="Outdoor Activities"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/team.png')}
              name="Team Building"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/climbing.jpg')}
              name="Climbing"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
              name="Canoeing"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
              name="Kayaking"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
              name="Rafting"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
              name="Cross Country Skiing"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
              name="Ropes Course"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
              name="Horseback Riding"
            />
            <Category imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
              name="Exploration"
            />
         

          </ScrollView>
        </View>
    
        <Button
          title="Organization"
          onPress={() => navigation.navigate('Example')}
        />
     
    
        
    </View>

    </ScrollView>
      </ImageBackground>
    </View>
  );
}



function seeAllProgramScreen ({route, navigation}){
  return (
  <ScrollView>
    
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Half Day Programs"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Single Day Programs"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Multiple Day Programs"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="End of season celebrations"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Overnight camps"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Week long expiditions"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Mentoring programs"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Family programs"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Summer camps"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="In-school teambuilding"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="In-school training"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Workshops in the community"
      />
    
    
  </ScrollView>
  )
}

function seeAllActivitiesScreen({ route, navigation }) {
  return (
    <ScrollView>

      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/outdoor.jpg')}
        name="Outdoor Activities"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/team.png')}
        name="Team Building"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/climbing.jpg')}
        name="Climbing"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
        name="Canoeing"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
        name="Kayaking"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/kayaking.jpg')}
        name="Rafting"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Cross Country Skiing"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Ropes Course"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Horseback Riding"
      />
      <Tile imageUri={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        name="Exploration"
      />

    </ScrollView>
  )
}

function ExampleScreen({route, navigation}){
  return (
    <ScrollView>
     
      <Company img={require('/Users/danmccarthy/Downloads/react/multi/images/school.jpg')}
        
        name={route.params ?.orgName}
        address={route.params ?.address}
        contact={route.params ?.contact}
        email={route.params ?.email}
        number={route.params ?.number}
        mission={route.params ?.mission}
        mission={route.params ?.website}  />
        
    
      <Button
        title="Home"
        onPress={() => {


          // Pass params back to home screen
          navigation.navigate('Home')
        

        }}
        
        
      />


    </ScrollView>
 

  )
}



function OrganizationScreen({ navigation, route }) {
  const [orgName,  setPostText] = React.useState('');
  const [contact, setContactText] = React.useState('');
  const [email, setEmailText] = React.useState('');
  const [address, setAddressText] = React.useState('');
  const [number, setNumberText] = React.useState('');
  const [mission, setMissionText] = React.useState('');
  const [charge, setChargeText] = React.useState('');
  const [hours, setHoursText] = React.useState('');

  const [website, setWebsite] = React.useState();

  return (
    <>
    <ScrollView>
    <Text>Organization name</Text>
      <TextInput        
        placeholder="Required"
        style={{ height: 45, padding: 10 }}
        value={orgName}
        onChangeText={setPostText}
      />
      <Text>Main Contact</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={contact}
        onChangeText={setContactText}
      />
      <Text>Email Address</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={email}
        onChangeText={setEmailText}
      />
      <Text>Address</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={address}
        onChangeText={setAddressText}
      />
      <Text>Contact's Phone Number</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={number}
        onChangeText={setNumberText}
      />
    
      <Text>What is your mission?</Text>
      <TextInput
      multiline
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={mission}
        onChangeText={setMissionText}
      />
      <Text>Who is the contact person in charge of organizing collaborations with schools?</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={charge}
        onChangeText={setChargeText}
      />
      <Text>What are your business hours?</Text>
      <TextInput
        placeholder="Required"
        style={{ height: 45, padding: 10, backgroundColor: 'white' }}
        value={hours}
        onChangeText={setHoursText}
      />
        <Text>What is your website URL?</Text>
        <TextInput
          placeholder="Required"
          style={{ height: 45, padding: 10, backgroundColor: 'white' }}
          value={website}
          onChangeText={setWebsite}
        />

      <Button
        title="Done"
          onPress={() => {
            

          // Pass params back to home screen
            navigation.navigate('Example', {
              orgName: orgName, contact: contact, email: email, address: address,
              number: number, mission: mission, website: website
            });
          
        }}
      />
      </ScrollView>
    </>
  );
}
const Stack = createStackNavigator();

function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Events">
        <Stack.Screen name="Home" component={HomeScreen}
        
         />
        <Stack.Screen name="Organization" component={OrganizationScreen} />
        <Stack.Screen name="All" component={seeAllProgramScreen} />
        <Stack.Screen name="Activities" component={seeAllActivitiesScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
        <Stack.Screen name="Grid" component={GridScreen} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen}
        options = {{
          headerShown : false
        }}
        />
        <Stack.Screen name="Organizations" component={OrganizationsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Events" component={EventScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Workshops" component={WorkshopScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="Manito" component={ManitoScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#5E2DD9'
              
            }
          }}
        />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48

  },
})
export default App;