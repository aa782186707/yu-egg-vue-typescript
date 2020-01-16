import { IncomingHttpHeaders } from 'http';
export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'TRACE' | 'CONNECT';
export interface PassParams {
    method: HttpMethod;
    data: object;
    headers: IncomingHttpHeaders;
    timeout: number;
}