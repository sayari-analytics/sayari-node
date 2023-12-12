/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as SayariAnalyticsApi from "../../../index.js";
import { default as URLSearchParams } from "@ungap/url-search-params";
import * as serializers from "../../../../serialization/index.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";
export class Search {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * Search for an entity
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.NotAcceptable}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    searchEntity(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { limit, offset } = request, _body = __rest(request, ["limit", "offset"]);
            const _queryParams = new URLSearchParams();
            if (limit != null) {
                _queryParams.append("limit", limit.toString());
            }
            if (offset != null) {
                _queryParams.append("offset", offset.toString());
            }
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SayariAnalyticsApiEnvironment.Production, "/v1/search/entity"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    client: yield core.Supplier.get(this._options.client),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                body: yield serializers.SearchEntity.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.EntitySearchResults.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SayariAnalyticsApi.BadRequest(yield serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 401:
                        throw new SayariAnalyticsApi.Unauthorized(yield serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 405:
                        throw new SayariAnalyticsApi.MethodNotAllowed(yield serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 406:
                        throw new SayariAnalyticsApi.NotAcceptable(yield serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 429:
                        throw new SayariAnalyticsApi.RateLimitExceeded(yield serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 500:
                        throw new SayariAnalyticsApi.InternalServerError(yield serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
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
    /**
     * Search for a record
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.NotAcceptable}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    searchRecord(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { limit, offset } = request, _body = __rest(request, ["limit", "offset"]);
            const _queryParams = new URLSearchParams();
            if (limit != null) {
                _queryParams.append("limit", limit.toString());
            }
            if (offset != null) {
                _queryParams.append("offset", offset.toString());
            }
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SayariAnalyticsApiEnvironment.Production, "/v1/search/record"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    client: yield core.Supplier.get(this._options.client),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                body: yield serializers.SearchRecord.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.RecordSearchResults.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new SayariAnalyticsApi.BadRequest(yield serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 401:
                        throw new SayariAnalyticsApi.Unauthorized(yield serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 405:
                        throw new SayariAnalyticsApi.MethodNotAllowed(yield serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 406:
                        throw new SayariAnalyticsApi.NotAcceptable(yield serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 429:
                        throw new SayariAnalyticsApi.RateLimitExceeded(yield serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 500:
                        throw new SayariAnalyticsApi.InternalServerError(yield serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
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
