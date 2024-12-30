import { Request, Response } from "express";
import {
  HttpStatusCode,
  HttpStatusType,
  MessageStatusType,
  PaginateType,
  ResponseMaster,
  ResponseMasterH,
} from "./types";

export interface ApiResponse<T> {
  success: boolean; // Indicates success or failure
  message: string; // A user-friendly message
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
  count?: number; // Optional count of results (e.g., for arrays)
  data: T | null; // Data returned from the API
}

// declare module "express" {
//   interface Response {
//     json: <T>(body: ApiResponse<T>) => this;
//   }
// }
const JSON = (
  res: Response,
  {
    status = "OK",
    code = "",
    success = true,
    data,
    message,
    paginate = undefined,
    token = undefined,
  }: {
    status?: HttpStatusType;
    success?: boolean;
    code?: string;
    data: any;
    message: string;
    paginate?: PaginateType;
    token?: string;
  }
) => {
  //

  const json: ResponseMasterH = {
    status: HttpStatusCode[status],
    success: success,
    message: message,
    code,
    count: 0,
    paginate: paginate,
    data: data,
    token: token,
  };

  if (Array.isArray(data)) {
    json.count = data.length;
  } else {
    delete json.count;
  }
  if (!paginate) {
    delete json.paginate;
  }
  if (!token) {
    delete json.token;
  }

  return res.status(HttpStatusCode[status]).json(json);
};

export default { JSON };
export { HttpStatusType as HttpStatusType } from "./types";
export { MessageStatusType as MessageStatusType } from "./types";
export { PaginateType as PaginateType } from "./types";
export { HttpStatusCode as HttpStatusCode } from "./types";
export { ResponseMaster as ResponseMaster } from "./types";
