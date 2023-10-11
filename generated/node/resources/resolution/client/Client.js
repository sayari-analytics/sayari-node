"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolution = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const SayariAnalyticsApi = __importStar(require("../../.."));
const url_search_params_1 = __importDefault(require("@ungap/url-search-params"));
const url_join_1 = __importDefault(require("url-join"));
const serializers = __importStar(require("../../../../serialization"));
const errors = __importStar(require("../../../../errors"));
class Resolution {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.
     * @throws {@link SayariAnalyticsApi.NotFoundError}
     */
    resolution(request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { name, identifier, country, address, dateOfBirth, contact, type: type_ } = request;
            const _queryParams = new url_search_params_1.default();
            if (name != null) {
                if (Array.isArray(name)) {
                    for (const _item of name) {
                        _queryParams.append("name", _item);
                    }
                }
                else {
                    _queryParams.append("name", name);
                }
            }
            if (identifier != null) {
                if (Array.isArray(identifier)) {
                    for (const _item of identifier) {
                        _queryParams.append("identifier", _item);
                    }
                }
                else {
                    _queryParams.append("identifier", identifier);
                }
            }
            if (country != null) {
                if (Array.isArray(country)) {
                    for (const _item of country) {
                        _queryParams.append("country", _item);
                    }
                }
                else {
                    _queryParams.append("country", country);
                }
            }
            if (address != null) {
                if (Array.isArray(address)) {
                    for (const _item of address) {
                        _queryParams.append("address", _item);
                    }
                }
                else {
                    _queryParams.append("address", address);
                }
            }
            if (dateOfBirth != null) {
                if (Array.isArray(dateOfBirth)) {
                    for (const _item of dateOfBirth) {
                        _queryParams.append("date_of_birth", _item);
                    }
                }
                else {
                    _queryParams.append("date_of_birth", dateOfBirth);
                }
            }
            if (contact != null) {
                if (Array.isArray(contact)) {
                    for (const _item of contact) {
                        _queryParams.append("contact", _item);
                    }
                }
                else {
                    _queryParams.append("contact", contact);
                }
            }
            if (type_ != null) {
                if (Array.isArray(type_)) {
                    for (const _item of type_) {
                        _queryParams.append("type", _item);
                    }
                }
                else {
                    _queryParams.append("type", type_);
                }
            }
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SayariAnalyticsApiEnvironment.Production, "/v1/resolution"),
                method: "GET",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.ResolutionResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 404:
                        throw new SayariAnalyticsApi.NotFoundError();
                    default:
                        throw new errors.SayariAnalyticsApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.SayariAnalyticsApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.SayariAnalyticsApiTimeoutError();
                case "unknown":
                    throw new errors.SayariAnalyticsApiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    _getAuthorizationHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = yield core.Supplier.get(this._options.token);
            if (bearer != null) {
                return `Bearer ${bearer}`;
            }
            return undefined;
        });
    }
}
exports.Resolution = Resolution;
