import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Mapa from '../Mapa/index';
import Relatar from '../Relatar/index';


export default function Home() {

  const { user, signOut } = useContext(AuthContext);

 return (
   <View style={{backgroundColor: '#4c669f'}} >
      <Relatar/>
      <Mapa />
      
      
      
      
   </View>
  );
}

/** 
       
<Button 
title="Sair"
onPress={ () => signOut() }
/>
*/
