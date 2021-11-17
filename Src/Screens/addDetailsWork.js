import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { useDispatch } from 'react-redux';
import { addDetailsWorkout } from '../redux/reducer/reducer';

export  const addDetailsWork = ({ navigation}) => { 
        // const { item } = route.params;
         
         const [podhod, setPodhod] = useState(null);
         const [weight, setWeight] = useState(null);
         const [amount, setAmount] = useState(null);

            const onChangePodhod = (number) => {setPodhod(number)};
            const onChangeWeigt = (number) => {setWeight(number)};
            const onChangeAmount = (number) => {setAmount(number)};

        // function getRandomInt(max) {
        // return Math.floor(Math.random() * max);
        // };
        const newWorkDetails = {/*key: getRandomInt(999999999999),*/ podhod: weight, weightamount: amount};
        const dispath = useDispatch();
        return (
        <SafeAreaView>
          
          <TextInput
           style={styles.input1}
           onChangeText={onChangePodhod}
           value={podhod}
           placeholder="Подход"
           keyboardType="numeric"
         />
        <TextInput
           style={styles.input1}
           onChangeText={onChangeWeigt}
           value={weight}
           placeholder="Вес"
           keyboardType="numeric"
         />
           <TextInput
           style={styles.input1}
           onChangeText={onChangeAmount}
           value={amount}
           placeholder="Количество"
           keyboardType="numeric"
         />        
        <Button 
        title = "Добавить подход"
        onPress = {() => {dispath(addDetailsWorkout(newWorkDetails))}}
        />
       </SafeAreaView>
     );     
};

const styles = StyleSheet.create({
    input1: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });


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
{/* <TextInput
         style={styles.input}
         onChangeText={onChangeName}
         value={name}
         placeholder="Название упражнения"         
        /> */}