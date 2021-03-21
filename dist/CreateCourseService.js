"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCouseService = /** @class */ (function () {
    function CreateCouseService() {
    }
    CreateCouseService.prototype.execute = function (_a) {
        var _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator, name = _a.name;
        console.log(name, duration, educator);
    };
    return CreateCouseService;
}());
exports.default = new CreateCouseService();
