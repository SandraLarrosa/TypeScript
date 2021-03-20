"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(_email) {
        this._email = _email;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
exports.Mail = Mail;
