import { Response } from "express";
import { HttpStatusType, MessageStatusType, PaginateType } from "./types";
declare const _default: {
    JSON: (res: Response<any, Record<string, any>>, { status, success, data, message, messageStatus, paginate, token, }: {
        status?: HttpStatusType;
        success?: boolean;
        data: any;
        message: string;
        messageStatus?: MessageStatusType;
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
