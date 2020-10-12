import React, {useState, useContext} from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text'
import { AuthContext } from '../../contexts/auth';

import { SubmitButton, SubmitText, Link, LinkText, Background, Container, Logo, AreaInput, Input } from './styles';


export default function SignIn() {

    const navigation = useNavigation();

    //Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    function handleLogin(){
        signIn(email, password);
    }

 return (
     //Background Degradê
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex:1 }}>
        <Background>
            <Container 
            //Da um espaçamento maior ao abrir o teclado se estiver no IOS
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >
             
                <Logo source={require('../../assets/wildfire.png')}/>
                
                <AreaInput>
                    <Input 
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />    
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />    
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    <SubmitText>Entrar</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp') }>
                    <LinkText>Ainda não é cadastrado? Cadastre-se</LinkText>
                </Link>
        
            </Container>
        </Background>
    </LinearGradient>
  );

}