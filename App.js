import React from 'react';
import { Provider } from 'react-redux';

import { Navigate } from './Src/navigation/navigations';


const App = () => {
    return ( 
       <Provider>
      <Navigate/>
      </Provider>
          
  );
};

export default App;