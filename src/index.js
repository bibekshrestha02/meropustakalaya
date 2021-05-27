import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import modelReducer from './store/reducer/modelReducer';
import authReducer from './store/reducer/authReducer';
import BookReducer from './store/reducer/bookReducer';
const reducer = combineReducers({
  model: modelReducer,
  auth: authReducer,
  book: BookReducer,
});
const store = createStore(reducer, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
