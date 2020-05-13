import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle, animateToRegion } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Map extends Component {

    state = {

        coordinates: [
            { name: 'Organization 1', latitude: 43.153105, longitude: -70.915864, contact: 'Dan', image: require('./img/apple.png'), address: '10 Madbury Rd' },
            { name: 'Organization 2', latitude: 43.173304, longitude: -70.918989, contact: 'Kendra', image: require('./img/apple.png'), address: '10 Goldsmith Rd' },
            { name: 'Organization 3', latitude: 43.105012, longitude: -70.918121, contact: 'Bill', image: require('./img/apple.png'), address: '10 Garrison rd' },
            { name: 'Organization 4', latitude: 43.138045, longitude: -70.918786, contact: 'Sally', image: require('./img/apple.png'), address: '10 Huttwill rd' },
            { name: 'Organization 5', latitude: 43.166175, longitude: -70.919500, contact: 'Dave', image: require('./img/apple.png'), address: '10 Main rd' },
        ]
    }

    onCarouselItemChange = (index) => {
        let location = this.state.coordinates[index];
        this._map.animateToRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
        })

    }



    renderCarouselItem = ({ item }) =>
        <View style={styles.cardContainer}>
            <Text style={styles.titleStyle} >{item.name}</Text>
            <Text style={styles.titleStyle}>{item.contact} </Text>
            <Text style={styles.titleStyle}>{item.address}</Text>
            <Image style={styles.cardImage} source={item.image} />
        </View>




    render() {

        return (
            <View style={styles.container}>
                <MapView

                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    showsUserLocation={true}
                    region={{
                        latitude: 43.133949,
                        longitude: -70.918968,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035
                    }}
                    style={styles.map}
                >
                    <Circle
                        center={{ latitude: 43.133949, longitude: -70.918968, }}
                        radius={1000}
                        fillColor={'rgba(120, 116, 240, 0.5)'}
                    />


                    <Marker
                        coordinate={{ latitude: 43.133949, longitude: -70.918968, }}
                        title={'Durham'}

                    >
                        <Callout>
                            <Text>University of New Hampshire</Text>

                        </Callout>




                    </Marker>
                    {this.state.coordinates.map(marker => (
                        <Marker
                            key={marker.name}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.name}
                        >
                        </Marker>
                    ))}
                </MapView>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.coordinates}
                    containerCustomStyle={styles.carousel}
                    renderItem={this.renderCarouselItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={300}
                    onSnapToItem={(index) => this.onCarouselItemChange(index)}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 48

    },
    cardContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: 200,
        width: 300,
        padding: 24,
        borderRadius: 24
    },
    cardImage: {
        height: 120,
        width: 300,
        bottom: 0,
        position: 'absolute',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    titleStyle: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center',

    }
})
