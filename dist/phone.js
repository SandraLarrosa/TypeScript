"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    constructor(_numberPhone) {
        this._numberPhone = _numberPhone;
    }
    set numberPhone(numberPhone) {
        this._numberPhone = numberPhone;
    }
    get numberPhone() {
        return this._numberPhone;
    }
}
exports.Phone = Phone;
