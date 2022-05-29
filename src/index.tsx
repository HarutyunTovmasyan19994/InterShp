import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store,Storage} from './Redux/Store/store'
import {PersistGate} from 'redux-persist/integration/react'
import  './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={false} persistor={Storage}>
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
