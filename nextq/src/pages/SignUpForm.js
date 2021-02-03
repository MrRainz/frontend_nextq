// import styles from '../../styles.js';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons'; 

export default function Signup({navigation}) {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const [mobile,setmobile]=useState("")

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
            <AntDesign name="adduser" size={24} color="black"> Sign Up </AntDesign>
        <View style={styles.form}>
            <AntDesign name="user" size={18} color="black"> Username </AntDesign>
            <TextInput type="username" name="username" id="username" placeholder="Username" value={username} style={styles.textinput} onChangeText={text => setusername(text)}/>
            <AntDesign name="lock" size={18} color="black"> Password </AntDesign>
            <TextInput type="password" name="password" id="password" placeholder="Password" value={password} style={styles.textinput} onChangeText={text => setpassword(text)}/>
            <Feather name="mail" size={18} color="black" > Email </Feather>
            <TextInput type="email" name="email" id="email" placeholder="Email" value={email} style={styles.textinput} onChangeText={text => setemail(text)}/>
            <FontAwesome name="mobile" size={18} color="black" > Mobile </FontAwesome>
            <TextInput type="mobile" name="mobile" id="mobile" placeholder="Mobile" value={mobile} style={styles.textinput} onChangeText={text => setmobile(text)}/>
        </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttontext}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signin} >
                <Text> Exisiting user? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.textsignin}> Sign In </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        flex:0.6,
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
    signin: {
        flex:0.1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textsignin: {
        color:'blue',
        fontSize:16
    }
})