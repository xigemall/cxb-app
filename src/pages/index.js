import React, { Component } from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import{ connect } from 'react-redux';

import Info from './index/components/Info';
import Grid from './index/components/Grid';


class Index extends Component {
  componentDidMount() {
    this.getUserInfo();
  }


  getUserInfo = () => {
    const {dispatch} = this.props;
    dispatch({
      type:'user/info',
    })
  };

  /**
   * 宫格items
   * @returns {*[]}
   */
  gridItems = ()=>{
    return [
      {
        uri: require('../assets/icon_withdraw.png'),
        text: '工资提现',
        onPress:()=>{
          this.props.navigation.navigate('Login')
        },
      },
      {
        uri: require('../assets/icon_personalIinformation.png'),
        text: '我的信息',
        onPress:()=>{
          //
        },
      },
      {
        uri: require('../assets/icon_item.png'),
        text: '我的项目',
        onPress:()=>{},
      },
      {
        uri: require('../assets/home_icon_class_normal.png'),
        text: '我的班组',
        onPress:()=>{},
      },
      {
        uri: require('../assets/home_icon_clock_normal.png'),
        text: '考勤打卡',
        onPress:()=>{},
      },
      {
        uri: require('../assets/home_icon_find_normal.png'),
        text: '找项目',
        onPress:()=>{},
      },
    ];
  }

  render() {
    const {data} = this.props;
    const gridItems = this.gridItems();
    return (
        <View style={style.container}>
          <StatusBar backgroundColor="#C4372D"/>
          <Info data={data} />
          <Grid data={gridItems}/>
        </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    height: '100%',
  },
});

export default connect(({user})=>({
  data:user.data
}))(Index);
