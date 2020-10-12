import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoding(false);
            }

            setLoding();
        }

        loadStorage();
    }, []);
    //login
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                };

                setUser(data);
                //salvar dados no banco obs: login fica salvo
                storageUser(data);
            })
        })
        .catch((error)=> {
            alert(error.code);
        });
    }

    //cadastro
    async function signUp(email, password, nome, cpf, sexo){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;
            //Dados de Cadastro salvos no database
            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                email: email,
                cpf: cpf,
                sexo: sexo
            })
            .then( () => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    cpf: value.user.cpf,
                    sexo: value.user.sexo,
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error)=> {
            alert(error.code);
        });
    }

    //guardar usuário no firebase
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //deslogar e limpar dados do firebase
    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

