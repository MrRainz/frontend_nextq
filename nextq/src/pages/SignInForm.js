// import styles from '../../styles.js';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';

export default function Signin({navigation}) {
    
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")

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
            localStorage.setItem('jwt', result.data.auth_token)
        })
        .catch(error => {
            console.log("Error:" ,error)
        })
    };

    return (
        <View style={styles.container}>
        <Text>Sign In</Text>
        <View>
            <Text>Email</Text>
            <TextInput type="username" name="username" id="username" placeholder="username" value={username} style={styles.textinput} onChangeText={text => setusername(text)}/>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput type="password" name="password" id="password" placeholder="password" value={password} style={styles.textinput} onChangeText={text => setpassword(text)}/>
        </View>
            <Button title={'Sign In'} onPress={handleSignIn}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
    }
})