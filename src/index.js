import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';
import {AppProvider} from './component/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <MainApp/>
    </AppProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


