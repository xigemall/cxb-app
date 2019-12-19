import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { create } from 'dva-core';

import App from '../routes/index';

import userModel from '../models/user';
import loginModel from '../models/login';


const models = [
  userModel,
  // 登录
  loginModel,
];

const app = create();

models.forEach(model => {
  app.model(model);
});
app.start();

const store = app._store;

export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}