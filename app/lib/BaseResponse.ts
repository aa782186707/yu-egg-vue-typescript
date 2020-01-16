/*
 * @Description: 接口统一返回结构类
 * @Date: 2018-11-27 14:02:23
 * @LastEditTime: 2018-12-11 16:43:50
 * @LastEditors: Please set LastEditors
 */

/**
 * 状态码说明
 * 0: 成功
 * -1: 失败
 * 1: 参数错误
 * 2: 数据库错误
 * 3: 未登录
 * 4: 用户不存在
 * 5: 无权限访问
 * 500: 内部服务器错误
 * 6: 没有此纪录
 */

export default class BaseResponse {
    public code: number;
    public msg?: string;
    public data?: any;
    constructor() {
        this.code = 0;
        this.msg = '';
        this.data = {};
    }
    /**
     * @msg: 操作成功返回
     * @param data 返回到前端的数据对象
     */
    success(data: any) {
        return {
            code: 0,
            msg: 'success',
            data: data || this.data
        };
    }
    /**
     * @msg: 操作失败时返回
     * @param errCode 错误码
     * @param errMessage 错误信息
     * @param data 返回到前端的数据对象
     */
    fail(errCode: number, errMessage: string, data: any) {
        return {
            code: errCode || this.code,
            msg: errMessage || this.msg,
            data: data || this.data
        };
    }
}
