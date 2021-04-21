import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './core/contexts/UserContext';
import { store } from './store';
import { Provider } from 'react-redux';

// store.getState()

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
