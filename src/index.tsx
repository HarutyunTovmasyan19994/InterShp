import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store,Storage} from './Redux/Store/store'
import {PersistGate} from 'redux-persist/integration/react'
import App from './App'
import  './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={false} persistor={Storage}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
