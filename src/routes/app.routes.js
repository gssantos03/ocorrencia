import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ocorrencia from '../pages/Ocorrencia/index';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#192f6a',
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#DDD',
                activeBackgroundColor: '#4c669f',
                inactiveBackgroundColor: '#3b5998',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Perfil" component={Profile} />
            <AppDrawer.Screen name="Ocorrencia" component={Ocorrencia} />

            
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;

//<AppDrawer.Screen name="Ocorrencia" component={Ocorrencia} />