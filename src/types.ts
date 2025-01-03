import { AxiosResponse, ResponseType } from "axios";
export type ResponseMasterH = {
  status: number;
  success: boolean;
  message: string;
  count?: number;
  paginate?: PaginateType;
  token: string;
  code: string;
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
export type MessageStatusType = "success" | "danger" | "warning" | "info";

export type PaginateType = {
  total: number;
  pageCount: number;
  start: number;
  end: number;
  skip: number;
  nextPage: number;
  prevPage: number;
};
