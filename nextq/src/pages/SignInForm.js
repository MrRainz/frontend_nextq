// import styles from '../../styles.js';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { Auth } from '../components/context.js';

export default function Signin({navigation}) {
    // NEED TO REDO TO SUIT OUR APP
    const [username, setusername]= useState("")
    const [password, setpassword]= useState("")

    const { setTrue } = useContext(Auth);

    //Testing Sign in API
    const handleSignIn = () => {
        axios({
          method: 'POST',
          url: 'https://insta.nextacademy.com/api/v1/login',
          data: {
            username: username,
            password: password
          }
        })
        .then(result => {
            console.log(result)
            console.log("Success")
            const jwt = result.data.auth_token
            console.log(jwt)
            AsyncStorage.setItem('jwt', result.data.auth_token)
            setTrue()
            navigation.navigate('Profile')
        })
        .catch(error => {
            console.log("Error:" ,error)
        })
    };

    return (
        <View style={styles.container}>
            <FontAwesome name="sign-in" size={24} color="black"> Sign In </FontAwesome> 
            <View style={styles.form}> 
                <AntDesign name="user" size={18} color="black"> Username </AntDesign>
                <TextInput type="username" name="username" id="username" placeholder="Username" value={username} style={styles.textinput} onChangeText={text => setusername(text)}/>
                <AntDesign name="lock" size={18} color="black"> Password </AntDesign>
                <TextInput type="password" name="password" id="password" placeholder="Password" style={styles.textinput} onChangeText={text => setpassword(text)}/>
            </View >
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttontext}> Sign In </Text>
            </TouchableOpacity>
            <View style={styles.signup} >
                <Text>Dont have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.textsignup}> Sign up </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center'
    },
    form: {
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',
        width: "80%",
        height: "50%"
    },
    button: {
        justifyContent:'center',
        alignItems:'center',
        width: 187,
        height: 46,
        borderRadius:50,
        shadowOffset: {
            width: 5,
            height: 5
          },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        backgroundColor: 'orange'
    },
    buttontext: {
        color:'white',
        fontSize:20
    },
    textinput:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        width: 272,
        height: 55
    },
    signup: {
        flex:0.1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textsignup: {
        color:'blue',
        fontSize:16
    }
})