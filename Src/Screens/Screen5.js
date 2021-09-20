import React, { useState } from "react";
import { SafeAreaView, Button, TextInput, StyleSheet } from "react-native";




 export const Screen5 = ({navigation, route}) => {    
    const [ text, setText ] = useState(null);
    const [ number, setNumber ] = useState(null);

    return (
        <SafeAreaView>
            <TextInput style = {styles.login} 
                onChangeText = {setText}
                value = {text}
                placeholder = {'Введите e-mail'}
                placeholderTextColor = {'red'}
                      
            /> 
            <TextInput style = {styles.login}
                onChangeText = {setNumber}
                value = {number}
                placeholder = {'Введите пароль'}
                secureTextEntry = {true} 
                placeholderTextColor = 'red' 
            />
            <Button
                title="Done"
                onPress={() => {                
                navigation.navigate('Screen4', {number, text} )
                }}
                />        
        </SafeAreaView>
    
    )
};

const styles = StyleSheet.create({
    login: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
    color: 'black',   
  },
});
