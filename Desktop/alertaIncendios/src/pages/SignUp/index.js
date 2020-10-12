import React, {useState, useRef, useContext} from 'react';
import { Platform, View, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

import { SubmitButton, SubmitText, Background, Container, AreaInput, Input, TextSexo } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';


export default function SignUp() {

    //Sexo
    const [sexo, setSexo] = React.useState('');

    //Cadastro  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    
    //CPF
    const [cpf, setCpf] = useState ('');
    const inputRef = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSignUp(){
        signUp(email, password, nome, cpf, sexo)
    }
    
 return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex:1 }}>
        <Background>
            <Container 
                //Da um espaçamento maior ao abrir o teclado se estiver no IOS
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
            >

                <Text style={{fontSize: 30, color: '#fff', marginBottom: 30, marginTop: -90, fontWeight: 'bold'}}>
                    Cadastro
                </Text>
    
                <AreaInput>
                    <Input 
                        placeholder="Nome Completo"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={ (text) => setNome(text) }
                    />    
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="E-mail"
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
                        secureTextEntry={true}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />    
                </AreaInput>
                
                <AreaInput>
                    <TextInputMask
                        style={{backgroundColor: '#192f6a', width: '90%', fontSize: 17, padding: 10, borderRadius: 7, color: '#fff', marginBottom: 20}}
                        placeholder="CPF"
                        type={'cpf'}
                        value={cpf}
                        keyboardType="numeric"
                        onChangeText={ (text) => {
                            setCpf(text)
                        }}
                        ref={inputRef}
                    />  
                    
                </AreaInput>
               

                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', borderRadius: 7, backgroundColor: '#192f6a', padding: 10 }}>
                    
                    <RadioButton.Group onValueChange={sexo => setSexo(sexo)} value={sexo}>

                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <TextSexo>Masculino</TextSexo>
                            <RadioButton value="Masculino" />
                        </View>

                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <TextSexo>Feminino</TextSexo>
                            <RadioButton value="Feminino" />
                        </View>

                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <TextSexo>Outros</TextSexo>
                            <RadioButton value="Outros" />
                        </View>

                    </RadioButton.Group>
                </View>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            
            </Container>
        </Background>
    </LinearGradient>
  );

}