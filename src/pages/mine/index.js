import React,{Component} from 'react';
import { Alert, View } from 'react-native';
import {
  Text,
  Button,
} from 'react-native-elements';
import { connect} from 'react-redux';
import { removeToken } from '../../utils/token';

class Mine extends Component{
  logout = ()=>{
    const {dispatch,navigation}= this.props;
    dispatch({
      type:'login/logout',
      callback:(data)=>{
        const { code, msg} = data;
        if(code === 200){
          removeToken();
          navigation.navigate('Home')
        }else{
          Alert.alert(msg);
        }
      }
    })
  }

  render(){
    return (
      <View>
        <Text>mine</Text>
        <Button title="退出登录" onPress={this.logout}/>
      </View>
    )
  }
}

export default connect()(Mine);