import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Avatar,
} from 'react-native-elements';


export default class Info extends Component {
  render() {
    const { data } = this.props;
    const {
      id,
      realname,
      mobile,
      email,
      avatar,
    } = data;

    return (
      <View style={style.container}>
        <View style={style.info}>
          <View style={style.avatar}>
            <Avatar
              size="large"
              rounded
              source={{uri:avatar}}
            />
            <Text style={[style.realname, style.textColor]}>{realname}</Text>
          </View>
          <Text style={[style.textColor, style.totalMoney]}>0.00</Text>
          <Text style={[style.textColor]}>总收入(元)</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#C4372D',
    height: 210,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 10,
    alignItems: 'center',
  },
  realname: {
    marginTop: 8,
  },
  totalMoney: {
    marginTop: 8,
    fontSize: 25,
  },
  textColor: {
    color: '#FFFFFF',
  },

});


