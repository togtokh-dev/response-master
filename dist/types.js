"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStatusCode = exports.HttpStatusCode = void 0;
exports.HttpStatusCode = {
    OK: 200,
    Created: 201,
    NoContent: 204,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    InternalServerError: 500,
};
var MessageStatusCode;
(function (MessageStatusCode) {
    MessageStatusCode["Success"] = "success";
    MessageStatusCode["Danger"] = "danger";
    MessageStatusCode["Warning"] = "warning";
    MessageStatusCode["Info"] = "info";
})(MessageStatusCode || (exports.MessageStatusCode = MessageStatusCode = {}));
