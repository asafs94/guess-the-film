import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RandomTvShow from './contexts/randomTvShow.context';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppForm from './contexts/form.context';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RandomTvShow.Provider>
        <AppForm.Provider>
          <App />
        </AppForm.Provider>
      </RandomTvShow.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
