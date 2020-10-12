import styled from 'styled-components/native';


//background do App -> tela de Login
export const Background = styled.View`
    flex: 1;
    
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;

`;

export const Logo = styled.Image`
    margin-bottom: 35px;
    
`;

//Configurações Input Login
export const AreaInput = styled.View`
    flex-direction: row;
`;

//Input configs
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    background: #192f6a; 
    width: 90%;
    font-size: 17px;
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 90%;
    height: 45px;
    border-radius: 20px;
    margin-top: 40px;

`;

//Botão
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #000;

`;

//link de ser redirecionado para Cadastro
export const LinkText = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 25px;
    margin-bottom: 9px;
`;


export const TextSexo = styled.Text`
    color: #fff;
    align-items: center;
    justify-content: center;
`;


export const TextInputMask = styled.Text`
    background-color: #fff;
    
`;

