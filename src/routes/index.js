import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthRoute, { AppRoute } from './route';
import Authority from '../pages/Authority';

const stackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#C4372D',
    },
    headerTintColor: '#fff',
    title: '诚薪宝',
    headerTitleStyle: {
      color: '#fff',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
  },
};

const AuthStackNavigator = createStackNavigator(AuthRoute, {
  initialRouteName: 'Login',
  ...stackConfig,
});
const AppStackNavigator = createStackNavigator(AppRoute, {
  initialRouteName: 'Home',
  ...stackConfig,
});

const switchNavigator = createSwitchNavigator({
  AuthLoading: Authority,// 判断是否登录
  App: AppStackNavigator,
  Auth: AuthStackNavigator,
}, {
  initialRouteName: 'AuthLoading',
});

const AppContainer = createAppContainer(switchNavigator);


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

