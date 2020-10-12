import React, { useContext } from 'react';
import { View, Text} from 'react-native';
import {Container, Nome, Logout, LogoutText} from './styles';

import { AuthContext } from '../../contexts/auth';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);

 return (
   
  //configurações Perfil do Usuário
  <Container>
    <Nome>
      {user && user.nome}
    </Nome>

    <Logout onPress={ () => signOut() }>
      <LogoutText>Sair</LogoutText>
    </Logout>
  </Container>
  );
}