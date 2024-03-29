import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


function Routes(){

    const { signed, loading } = useContext(AuthContext);

    //ícone de carregamento
    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }

    //se signed for true mostra AppRoutes senão mostra AuthRoutes
    return(
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;