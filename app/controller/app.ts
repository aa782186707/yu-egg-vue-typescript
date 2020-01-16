import { Controller, Context } from 'egg';

export default class AppController extends Controller {
    public async home(ctx: Context) {
        await ctx.render('admin/home.js', { url: ctx.url.replace(/\/admin/, '') });
    }
    public async check(ctx: Context) {
        console.log(ctx.baseResponse);
        ctx.baseResponse({ type: 'success', data: '检测成功' });
        // ctx.baseResponse({ type: 'fail', errMessage: '失败', errorCode:'404' })
    }
}