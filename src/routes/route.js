import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../pages/index';
import Mine from '../pages/mine/index';

import Login from '../pages/user/Login';


// 底部tabBar
const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => {
        return (<AntDesign name="home" size={20} color={tintColor} />);
      },
    },
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => {
        return (<AntDesign name="user" size={20} color={tintColor} />);
      },
    },
  },
});


// 登录成功
const AppRoute = {
  Home: {
    screen: tabNavigator,
  },
  // 登录
  Login: {
    screen: Login,
  },
};

// 未登录
const AuthRoute = {
  Home: {
    screen: tabNavigator,
  },
  // 登录
  Login: {
    screen: Login,
  },
};

export {
  AppRoute,
  AuthRoute,
}
export default AuthRoute;
