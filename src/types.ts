import { AxiosResponse, ResponseType } from "axios";
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

export const HttpStatusCode = {
  OK: 200,
  Created: 201,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};
export enum MessageStatusCode {
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
}
export type HttpStatusType =
  | "OK"
  | "Created"
  | "NoContent"
  | "BadRequest"
  | "Unauthorized"
  | "Forbidden"
  | "NotFound"
  | "InternalServerError";
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
