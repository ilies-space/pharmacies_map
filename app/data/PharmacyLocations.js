import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function PharmaciesMap() {
  const markers = [
    {
      latlng: {latitude: 35.9301208, longitude: 0.0880113},
      title: 'Pharmacie Bouguelmouna',
      description: 'Pharmacie Bouguelmouna',
    },

    {
      latlng: {latitude: 35.9301602, longitude: 0.0896019},
      title: 'Pharmacie Khedim Hadj Amine',
      description: 'Pharmacie Khedim Hadj Amine',
    },

    {
      latlng: {latitude: 35.74502, longitude: -0.56989},
      title: 'PHARMACIE YAFOUR W CANASTEL ORAN',
      description: 'PHARMACIE YAFOUR W CANASTEL ORAN',
    },

    {
      latlng: {latitude: 36.473333, longitude: 2.827754},
      title: 'Pharmacie didouche',
      description: 'Pharmacie didouche',
    },

    {
      latlng: {latitude: 36.74053, longitude: 3.00957},
      title: 'Pharmacie aoudia',
      description: 'Pharmacie aoudia',
    },
    {
      latlng: {latitude: 34.86158, longitude: -1.33935},
      title: 'pharmacie boudghen stambouli isma',
      description: 'pharmacie boudghen stambouli isma',
    },
    {
      latlng: {latitude: 28.033886, longitude: 1.6596259999999998},
      title: 'صيدلية الصحة',
      description: 'صيدلية الصحة',
    },

    {
      latlng: {latitude: 36.7087416, longitude: 4.0533315},
      title: 'Pharmacie NEBBALI',
      description: 'Pharmacie NEBBALI',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        zoomControlEnabled={true}
        style={{height: '100%', width: '100%'}}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}
