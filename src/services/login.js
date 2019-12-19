import request from '../utils/request';

/**
 * 登录
 * @param payload
 * @returns {Promise<void>}
 */
export async function login(payload) {
  return await request('/api/login',{
    method:'POST',
    data:payload,
  });
}

export async function logout(){
  return await request('/api/logout',{
    method: 'POST',
  })
}
