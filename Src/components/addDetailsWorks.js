// import React, {useState} from 'react';
// import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';

// import { useDispatch } from 'react-redux';
// import { addDetailsWorkout } from '../redux/reducer/reducer';

// export  const addDetailsWorks = ({ navigation: { goBack }}) => {  
                 
//          const [weight, setWeight] = useState(null);
//          const [amount, setAmount] = useState(null);

//         const onChangeWeigt = (number) => {setWeight(number)};
//         const onChangeAmount = (number) => {setAmount(number)};

//         function getRandomInt(max) {
//         return Math.floor(Math.random() * max);
//         };
//         const newWork = {id: getRandomInt(999999999999), title: name};
//         const dispath = useDispatch();
//         return (
//         <SafeAreaView>

//         <TextInput
//            style={styles.input}
//            onChangeText={onChangeWeigt}
//            value={weight}
//            placeholder="Вес"
//            keyboardType="numeric"
//          />
//            <TextInput
//            style={styles.input}
//            onChangeText={onChangeAmount}
//            value={amount}
//            placeholder="Количество"
//            keyboardType="numeric"
//          />        
//         <Button 
//         title = "Добавить упражнение"
//         onPress = {() => {dispath(addDetailsWorkout(WorkDetails)),
//         goBack();}} 
//         />
//        </SafeAreaView>
//      );     
// };

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
{/* <TextInput
         style={styles.input}
         onChangeText={onChangeName}
         value={name}
         placeholder="Название упражнения"         
        /> */}