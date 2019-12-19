import { info } from '../services/user';

export default {
  namespace: 'user',
  state: {
    data: {},
  },
  effects: {
    * info({ payload }, { call, put }) {
      const result = yield call(info);
      const { code, data } = result;
      if (code === 200) {
        yield put({
          type: 'save',
          payload: data,
        });
      }

    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, data: payload };
    },
  },
};