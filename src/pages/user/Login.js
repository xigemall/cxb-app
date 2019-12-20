import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Input,
  Button,
} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class Login extends Component {
  state = {
    submitLoading: false,
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {
      form: { validateFields },
      dispatch,
    } = this.props;
    validateFields((err, value) => {
      if (!err) {
        this.setState({ submitLoading: true });
        dispatch({
          type:'login/login',
          payload:value,
          callback:(data)=>{
            this.setState({ submitLoading: false });
            const{code} = data;
            if(code === 200){
              this.props.navigation.navigate('Home')
            }
          }
        });
        setTimeout(()=>{
          this.setState({ submitLoading: false });
        },6000);
      }
    });
  };

  render() {
    const background = require('../../assets/background-image.jpg');
    const {
      form: { getFieldProps, setFieldsValue, getFieldError },
    } = this.props;
    const { submitLoading } = this.state;


    const usernameError = getFieldError('username') ? getFieldError('username').join(',') : null;
    const passwordError = getFieldError('password') ? getFieldError('password').join(',') : null;
    return (
        <ImageBackground source={background} style={style.container}>
          <View style={style.loginContainer}>
            <View>
              <Input
                placeholder="手机、邮箱"
                leftIcon={<AntDesign name="user" size={22} />}
                inputStyle={{ color: '#fff' }}
                onChangeText={(value) => {
                  setFieldsValue({ username: value });
                }}
                maxLength={50}
                {
                  ...getFieldProps('username', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: '账号必填',
                      },
                    ],
                  })
                }
                errorMessage={usernameError}
              />
            </View>
            <View>
              <Input
                placeholder="密码"
                leftIcon={<AntDesign name="lock" size={22} />}
                secureTextEntry
                maxLength={200}
                inputStyle={{ color: '#fff' }}
                onChangeText={(value) => {
                  setFieldsValue({ password: value });
                }}
                {
                  ...getFieldProps('password', {
                    initialValue: '',
                    rules: [
                      {
                        required: true,
                        message: '密码必填',
                      },
                    ],
                  })
                }
                errorMessage={passwordError}
              />
            </View>
            <View style={style.submit}>
              <Button
                title="登录"
                onPress={this.onSubmit}
                loading={submitLoading}
                disabled={submitLoading}
                buttonStyle={style.loginButton}
                disabledStyle={style.loginButton}
              />
            </View>
          </View>
        </ImageBackground>

    );
  }
}
export default connect(({login})=>({
  data:login,
}))((createForm())(Login))

const style = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',

  },
  loginContainer: {
    width: width - 100,
    marginTop: 80,
  },
  submit: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#1890ff',
  },
});
