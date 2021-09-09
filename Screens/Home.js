import { Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

    export const Home = ({navigation}) => {
    return (  
    <View>               
        <Button 
        title =  "Next"
        onPress={() => 
        navigation.navigate('Screen1') 
        } 
         />  
    </View> 
    );
};


