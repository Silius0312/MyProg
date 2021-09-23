import React from 'react';
import {Provider} from "react-redux"
import { store } from './Src/redux/store';
 
import { Navigate } from './Src/navigation/navigations';


const App = () => {
    return ( 
      <Provider store={store}>
      <Navigate/>
      </Provider>
          
  );
};

export default App;