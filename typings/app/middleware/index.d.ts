// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../app/middleware/access';
import ExportCache = require('../../../app/middleware/cache');
import ExportGlobal from '../../../app/middleware/global';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
    cache: typeof ExportCache;
    global: typeof ExportGlobal;
  }
}
