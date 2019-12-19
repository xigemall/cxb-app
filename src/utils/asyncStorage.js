import { Alert, AsyncStorage } from 'react-native';

class StorageSync {
  /**
   * 获取
   * @param key
   * @returns {Promise<string | null>}
   */
  static get(key) {
    try {
      return AsyncStorage.getItem(key);
    } catch (e) {
      Alert.alert('获取Storage失败', JSON.stringify(e));
    }
  }

  /**
   * 设置
   * @param key
   * @param value
   */
  static set(key,value){
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    try {
      AsyncStorage.setItem(key, value);
    } catch (e) {
      Alert.alert('设置Storage失败', JSON.stringify(e));
    }
  }

  /**
   * 移除
   * @param key
   */
  static remove(key){
    try{
      AsyncStorage.removeItem(key);
    }catch (e) {
      Alert.alert('移除Storage失败',JSON.stringify(e));
    }
  }
}

export default StorageSync;
