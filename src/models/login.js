import { login,logout } from '../services/login';
import { Alert } from 'react-native';
import { setToken } from '../utils/token';


export default {
  namespace: 'login',

  state: {},

  effects: {
    // 登录
    * login({ payload, callback }, { call, put }) {
      const result = yield call(login, payload);
      const { code, msg, data } = result;
      if (code === 200) {
        saveToken(data.token);
      } else if (code === 422 || code === 400) {
        Alert.alert(msg);
      }

      if (callback) {
        callback(result);
      }
    },

    // 退出登录
    * logout({callback},{call}){
      const result = yield call(logout);
      if(callback) callback(result);
    }
  },
  reduces: {
    save(state) {
      return { ...state };
    },
  },
};

/**
 * 保存token
 * @param token
 * @returns {Promise<void>}
 */
const saveToken = async (token) => {
  await setToken(token);
}
