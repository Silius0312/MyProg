import React from "react";
import {
    Button,
    View, 
    StyleSheet, 
} from "react-native";


export const Screen4 = (navigation) => {
    return (
        <View>     
            <Button
                title="Go to Screen5"
                onPress={() => {
                navigation.navigate('Screen5', {
                itemId: 86,                
          });
        }}
        />
         </View> 
         
    );
        
    

};




const styles = StyleSheet.create({
    input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
    color: 'red',   
  },
});