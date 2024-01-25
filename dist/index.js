"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
const types_1 = require("./types");
const JSON = (res, { status = "OK", success = true, data, message, messageStatus = "Info", paginate = undefined, token = undefined, }) => {
    //
    const json = {
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
        token: "",
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
