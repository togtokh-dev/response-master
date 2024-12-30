"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
const types_1 = require("./types");
// declare module "express" {
//   interface Response {
//     json: <T>(body: ApiResponse<T>) => this;
//   }
// }
const JSON = (res, { status = "OK", code = "", success = true, data, message, paginate = undefined, token = undefined, }) => {
    //
    const json = {
        status: types_1.HttpStatusCode[status],
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
    }
    else {
        delete json.count;
    }
    if (!paginate) {
        delete json.paginate;
    }
    if (!token) {
        delete json.token;
    }
    return res.status(types_1.HttpStatusCode[status]).json(json);
};
exports.default = { JSON };
var types_2 = require("./types");
Object.defineProperty(exports, "HttpStatusCode", { enumerable: true, get: function () { return types_2.HttpStatusCode; } });
