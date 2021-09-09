import { Button, View, Text } from "react-native";


export const Screen1 = ({navigation}) => {
    return (
        <View>            
            <Button 
            title =  "Back"
            onPress={() => 
            navigation.navigate('Home') 
    } 
    /> 
        </View>  
    );
};