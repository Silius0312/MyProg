import React, { useState } from "react";
import { SafeAreaView, Button, TextInput, StyleSheet } from "react-native";




 export const Screen5 = ({navigation, route}) => { 
    const [ text, setText ] = useState(null);
    const[ number, setNumber ] =useState(null);
    
     return (
         <SafeAreaView>
             <TextInput style = {styles.txtinput} 
             onChangeText = {setText}
             value = {text}
             placeholder = {'Введите e-mail'}
             />
             <TextInput style ={styles.txtinput} 
             onChangeText = {setNumber}
             value = {number}
             placeholder = {'Введите пароль'}

             />
             <Button 
             title = 'Done'
             onPress = {() => {
                 navigation.navigate('Screen4', {text1: text, number1: number})
             }}
             />
             </SafeAreaView>
     )
 };   


   

 const styles = StyleSheet.create({
    txtinput: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
    color: 'red'
    }
});  