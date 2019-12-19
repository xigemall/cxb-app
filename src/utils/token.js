import StorageSync from './asyncStorage';

// token名
const tokenName = 'token';

export function setToken(token){
  StorageSync.set(tokenName,token);
}

export function getToken(){
  return StorageSync.get(tokenName)
}

export function removeToken(){
  StorageSync.remove(tokenName);
}
