import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(

        //Header <- Voltar
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{headerShown: false}}
            />

            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{
                    headerStyle:{
                        backgroundColor: '#4c669f',
                        borderBottomWidth: 1,
                        //colocar da mesma COR do botão de Cadastrar e Entrar
                        borderBottomColor: '#ffff'
                    },
                    //configs do titulo do header
                    headerTintColor: '#ffff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;