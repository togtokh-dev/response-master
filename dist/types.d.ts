import { AxiosResponse } from "axios";
export type ResponseMasterH = {
    status: HttpStatusType;
    success: boolean;
    message: string;
    messageData: {
        message: string;
        messageStatus: MessageStatusType;
        messageCode: string;
    };
    count?: number;
    paginate?: PaginateType;
    data: any;
};
export interface ResponseMaster extends AxiosResponse {
    data: ResponseMasterH;
}
export declare const HttpStatusCode: {
    OK: number;
    Created: number;
    NoContent: number;
    BadRequest: number;
    Unauthorized: number;
    Forbidden: number;
    NotFound: number;
    InternalServerError: number;
};
export declare enum MessageStatusCode {
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Info = "info"
}
export type HttpStatusType = "OK" | "Created" | "NoContent" | "BadRequest" | "Unauthorized" | "Forbidden" | "NotFound" | "InternalServerError";
export type MessageStatusType = "Success" | "Danger" | "Warning" | "Info";
export type PaginateType = {
    total: number;
    pageCount: number;
    start: number;
    end: number;
    skip: number;
    nextPage: number;
    prevPage: number;
};
