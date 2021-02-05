import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { Auth } from '../components/context.js';

// import Toast from 'react-native-root-toast';

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
            // Toast.show('Successfully sign in!', {
            //     duration: Toast.durations.LONG,
            //     position: 90,
            //     textColor: 'black',
            //     backgroundColor: 'green',
            //     shadow: true,
            //     animation: true,
            //     hideOnPress: true,
            //     delay: 0,
            // });
        })
        .catch(error => {
            console.log("Error:" ,error)
            // Toast.show(`${error}`, {
            //     duration: Toast.durations.LONG,
            //     position: 90,
            //     textColor: 'black',
            //     backgroundColor: 'red',
            //     shadow: true,
            //     animation: true,
            //     hideOnPress: true,
            //     delay: 0,
            // });
        })
    };

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
            <View style={styles.container}>
                <FontAwesome name="sign-in" size={24} color="black"> Sign In </FontAwesome> 
                <View style={styles.form}> 
                    <AntDesign name="user" size={18} color="black">
                        Username
                    </AntDesign>
                    <View style={styles.textinput}>
                        <View style={styles.textinputicon}>
                            <AntDesign name="user" size={18} color="black"/>
                        </View>
                        <TextInput clearButtonMode='while-editing' textContentType="username" name="username" id="username" placeholder="Username" value={username} style={styles.textinputflex} onChangeText={text => setusername(text)}/>
                    </View>
                    <AntDesign name="lock" size={18} color="black">
                        Password
                    </AntDesign>
                    <View style={styles.textinput}>
                        <View style={styles.textinputicon}>
                            <AntDesign name="lock" size={18} color="black"/>
                        </View>
                        <TextInput secureTextEntry={true} clearButtonMode='while-editing' textContentType="password" name="password" id="password" placeholder="Password" style={styles.textinputflex} onChangeText={text => setpassword(text)}/>
                    </View>
                </View >
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <FontAwesome name="sign-in" size={24} color="black"/>
                    <Text style={styles.buttontext}> Sign In </Text>
                </TouchableOpacity>
                <View style={styles.signup} >
                    <Text>Dont have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                        <Text style={styles.textsignup}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        // </TouchableWithoutFeedback>
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
        flexDirection:'row',
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
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderColor:'grey',
        borderWidth:0.5,
        borderRadius:5,
        width: "80%",
        height: 55,
        padding: 10,
    },
    textinputicon:{
        flex:0.1, 
        alignItems:'center'
    },
    textinputflex: {
        flex:1,
        height:'100%',
        marginLeft:5,
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