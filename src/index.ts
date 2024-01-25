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
    messageStatus = "Info",
    paginate = undefined,
  }: {
    status?: HttpStatusType;
    success?: boolean;
    data: any;
    message: string;
    messageStatus?: MessageStatusType;
    paginate?: PaginateType;
  }
) => {
  //

  const json: ResponseMasterH = {
    status: status,
    success: success,
    message: message,
    messageData: {
      message: message,
      messageStatus: messageStatus,
      messageCode: "123",
    },
    count: 0,
    paginate: paginate,
    data: data,
  };

  if (Array.isArray(data)) {
    json.count = data.length;
  } else {
    delete json.count;
  }
  if (paginate) {
    delete json.paginate;
  }

  return res.status(HttpStatusCode[status]).json(json);
};

export default { JSON };
export { HttpStatusType as HttpStatusType } from "./types";
export { MessageStatusType as MessageStatusType } from "./types";
export { PaginateType as PaginateType } from "./types";
export { HttpStatusCode as HttpStatusCode } from "./types";
export { ResponseMaster as ResponseMaster } from "./types";