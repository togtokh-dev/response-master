import { Response } from "express";
import { HttpStatusType, PaginateType } from "./types";
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    token?: string;
    code: string;
    paginate?: {
        total: number;
        pageCount: number;
        start: number;
        end: number;
        skip: number;
        nextPage: number;
        prevPage: number;
    };
    count?: number;
    data: T | null;
}
declare const _default: {
    JSON: (res: Response, { status, code, success, data, message, paginate, token, }: {
        status?: HttpStatusType;
        success?: boolean;
        code?: string;
        data: any;
        message: string;
        paginate?: PaginateType;
        token?: string;
    }) => Response<any, Record<string, any>>;
};
export default _default;
export { HttpStatusType as HttpStatusType } from "./types";
export { MessageStatusType as MessageStatusType } from "./types";
export { PaginateType as PaginateType } from "./types";
export { HttpStatusCode as HttpStatusCode } from "./types";
export { ResponseMaster as ResponseMaster } from "./types";
