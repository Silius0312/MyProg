import React from "react";
import {
    Button,
    View, 
    StyleSheet, 
} from "react-native";


export const Screen4 = () => {
    const productList = () => {
        return [
          {
            id: 1,
            title: "FirstProduct",
            description: "Example",
            photo: 1,
            price: 1,
            date: 1,
            favorite: 1,
          },
        ],
        <View>     
            <Button 
                title = 'Перенести на 5 страницу'
                onPress ={() => 
                navigation.navigate('Screen5', {firstElement: productList})}/>
         </View> 
         
        
        const {firstElement} = route.params;
    
}
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