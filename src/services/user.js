import request from '../utils/request';
import {getToken} from '../utils/token';

/**
 * 用户信息
 * @returns {Promise<void>}
 */
export async function info() {
 return await request.get('/api/current');

}
