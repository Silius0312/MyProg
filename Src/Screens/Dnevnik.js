import React, {useState} from "react";
import { View } from 'react-native';

import { useDispatch } from 'react-redux';                              // импорт useDispatch
import { addDetailsWorkout } from '../redux/reducer/reducer';  

export const Dnevnik = () => {

        const [weight, setWeight] = useState(null);
        const [amount, setAmount] = useState(null);

        const onChangeWeigt = (number) => {setWeight(number)};
        const onChangeAmount = (number) => {setAmount(number)};
        const dispath = useDispatch();
        const addDetailsWork = { amount: amount, weight: weight};
    return {



    }
}

