import React from 'react';
import {Provider} from "react-redux"
import { store } from './Src/redux/store';
 
import { Navigate } from './Src/navigation/navigations';
import { StyleSheet } from 'react-native';


const App = () => {
    return ( 
      <Provider store={store}>
      <Navigate/>
      </Provider>
          
  );
};

export default App;


// const style = StyleSheet.create ({
//   page: {

//   }

// })

