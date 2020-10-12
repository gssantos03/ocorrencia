import { View } from 'react-native';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Ocorrencia from '../Ocorrencia';

export default function Relatar() {

    const navigation = useNavigation();

 return (
   <View style={{alignItems: 'flex-end', margin: '3%'}}>
       <AntDesign 
          name="pluscircle" size={75} color="#fff" onPress={ () =>
          navigation.navigate('Ocorrencia')}
        />
   </View>
  );
}