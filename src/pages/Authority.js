import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getToken } from '../utils/token';

class Authority extends Component {
  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = async () => {
    const { navigation } = this.props;
    const token = await getToken();
    navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export default Authority;