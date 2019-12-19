/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// import App from './src/routes/index';
import App from './src/pages/App';


console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];


console.disableYellowBox = true ;// 关闭全部黄色警告

// ReactNative移除不必要的控制台 红色警告
console.reportErrorsAsExceptions = false;

AppRegistry.registerComponent(appName, () => App);
