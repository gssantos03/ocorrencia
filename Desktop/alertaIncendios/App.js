import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AuthProvider from './src/contexts/auth';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index';

//desativar mensagens de Alerta
console.disableYellowBox=true;


export default function App() {
 return (
   <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#4c669f" style="light" translucent={false} />
        <Routes />
      </AuthProvider>
   </NavigationContainer>
  );
}

