// import styles from '../../styles.js';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';

export default function Signup({navigation}) {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")

    // Testing Sign Up Api
    const handleSignUp = () => {    
        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            data: {
                username: username,
                email: email,
                password: password
            }
        })
        .then(result => {
            console.log(result)
            console.log("Success")
        })
        .catch(error => {
            console.log("Error:" ,error)
        })
    };

    return (
        <View style={styles.container}>
            <Text>Sign up</Text>
        <View>
            <Text>Username</Text>
            <TextInput type="username" name="username" id="username" placeholder="username" value={username} style={styles.textinput} onChangeText={text => setusername(text)}/>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput type="password" name="password" id="password" placeholder="password" value={password} style={styles.textinput} onChangeText={text => setpassword(text)}/>
        </View>
        <View>
            <Text>Email</Text>
            <TextInput type="email" name="email" id="email" placeholder="email" value={email} style={styles.textinput} onChangeText={text => setemail(text)}/>
        </View>
            <Button title={'Sign Up'} onPress={handleSignUp}></Button>
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