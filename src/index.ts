import { Request, Response } from "express";
import {
  HttpStatusCode,
  HttpStatusType,
  MessageStatusType,
  PaginateType,
  ResponseMaster,
  ResponseMasterH,
} from "./types";

const JSON = (
  res: Response,
  {
    status = "OK",
    success = true,
    data,
    message,
    messageStatus = "info",
    paginate = undefined,
    token = undefined,
  }: {
    status?: HttpStatusType;
    success?: boolean;
    data: any;
    message: string;
    messageStatus?: MessageStatusType;
    paginate?: PaginateType;
    token?: string;
  }
) => {
  //

  const json: ResponseMasterH = {
    status: HttpStatusCode[status],
    success: success,
    message: message,
    messageData: {
      message: message,
      messageStatus: messageStatus,
      messageCode: "_________",
    },
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
