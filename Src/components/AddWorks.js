import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { addNewWorkout } from '../redux/reducer/reducer';

export  const addWorks = ({ navigation: { goBack }}) => {  
        

        const [name, setName]= useState(null);  
//         const [weight, setWeight] = useState(null);
//         const [amount, setAmount] = useState(null);

        const onChangeName = (text) => {setName(text)};
//         const onChangeWeigt = (number) => {setWeight(number)};
//         const onChangeAmount = (number) => {setAmount(number)};

        function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        };
        const newWork = {id: getRandomInt(999999999999), title: name};
        const dispath = useDispatch();
        return (
        <SafeAreaView>
        <TextInput
         style={styles.input}
         onChangeText={onChangeName}
         value={name}
         placeholder="Название упражнения"         
        />
        <Button 
        title = "Добавить упражнение"
        onPress = {() => {dispath(addNewWorkout(newWork)),
        goBack();}} 
        />
       </SafeAreaView>
     );     
};

// const styles = StyleSheet.create({
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//     }
//   });


//        <TextInput
//           style={styles.input}
//           onChangeText={onChangeWeigt}
//           value={weight}
//           placeholder="Вес"
//           keyboardType="numeric"
//         />
//           <TextInput
//           style={styles.input}
//           onChangeText={onChangeAmount}
//           value={amount}
//           placeholder="Количество"
//           keyboardType="numeric"
//         />