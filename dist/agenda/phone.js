"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    constructor(_type, _numberPhone) {
        this._type = _type;
        this._numberPhone = _numberPhone;
    }
    set type(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set numberPhone(numberPhone) {
        this._numberPhone = numberPhone;
    }
    get numberPhone() {
        return this._numberPhone;
    }
}
exports.Phone = Phone;
