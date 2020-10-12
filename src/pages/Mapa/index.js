import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


export default class Mapa extends Component {
 render(){
  return (
    <View>
        <MapView 
            style={{width: '100%', height: 780}}
            initialRegion={{
                latitude: -15.7801,
                longitude: -47.9292,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
        
        
    </View>
   );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})