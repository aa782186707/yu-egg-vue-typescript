'use strict';
import { Context } from 'egg';
import DB from '../lib/db/base';
import BaseResponse from '../lib/BaseResponse';
const baseResponse = new BaseResponse();
import { PassParams } from '../lib/PassParams';
export default {
  get db(this: Context): DB {
    return this.app.db;
  },
  baseResponse(this: Context, { type, errorCode, errMessage, data }): void {
    if (type !== 'success') {
      this.body = baseResponse.fail(errorCode, errMessage, data);
    } else {
      this.body = baseResponse.success(data);
    }
  },
  httpGet(this: Context, url: string, params?: object, options?: object, headers?: object) {
    return new Promise(async (resolve, reject) => {
      const paramsData = {
        method: 'GET',
        data: params,
        ...options,
        headers,
        timeout: 60000
      } as PassParams;
      const res = await this.curl(url, paramsData);
      if (res.status === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  },
  httpPost(this: Context, url: string, params: object, options: object = {}, headers: object) {
    return new Promise(async (resolve, reject) => {
      const postParams = {
        method: 'POST',
        data: params,
        headers,
        ...options,
        timeout: 60000
      } as PassParams;
      const res = await this.curl(url, postParams);
      if (res.status === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  }
};