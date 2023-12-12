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
import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import * as SayariAnalyticsApi from "../../../index.js";
import { default as URLSearchParams } from "@ungap/url-search-params";
import * as serializers from "../../../../serialization/index.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";
export class Entity {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * Retrieve an entity from the database based on the ID
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    getEntity(id, request = {}, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { attributesNameNext, attributesNamePrev, attributesNameLimit, attributesAddressNext, attributesAddressPrev, attributesAddressLimit, attributesCountryNext, attributesCountryPrev, attributesCountryLimit, relationshipsNext, relationshipsPrev, relationshipsLimit, relationshipsType, relationshipsSort, relationshipsStartDate, relationshipsEndDate, relationshipsMinShares, relationshipsCountry, relationshipsArrivalCountry, relationshipsDepartureCountry, relationshipsHsCode, possiblySameAsNext, possiblySameAsPrev, possiblySameAsLimit, referencedByNext, referencedByPrev, referencedByLimit, } = request;
            const _queryParams = new URLSearchParams();
            if (attributesNameNext != null) {
                _queryParams.append("attributes.name.next", attributesNameNext);
            }
            if (attributesNamePrev != null) {
                _queryParams.append("attributes.name.prev", attributesNamePrev);
            }
            if (attributesNameLimit != null) {
                _queryParams.append("attributes.name.limit", attributesNameLimit.toString());
            }
            if (attributesAddressNext != null) {
                _queryParams.append("attributes.address.next", attributesAddressNext);
            }
            if (attributesAddressPrev != null) {
                _queryParams.append("attributes.address.prev", attributesAddressPrev);
            }
            if (attributesAddressLimit != null) {
                _queryParams.append("attributes.address.limit", attributesAddressLimit.toString());
            }
            if (attributesCountryNext != null) {
                _queryParams.append("attributes.country.next", attributesCountryNext);
            }
            if (attributesCountryPrev != null) {
                _queryParams.append("attributes.country.prev", attributesCountryPrev);
            }
            if (attributesCountryLimit != null) {
                _queryParams.append("attributes.country.limit", attributesCountryLimit.toString());
            }
            if (relationshipsNext != null) {
                _queryParams.append("relationships.next", relationshipsNext);
            }
            if (relationshipsPrev != null) {
                _queryParams.append("relationships.prev", relationshipsPrev);
            }
            if (relationshipsLimit != null) {
                _queryParams.append("relationships.limit", relationshipsLimit.toString());
            }
            if (relationshipsType != null) {
                _queryParams.append("relationships.type", relationshipsType);
            }
            if (relationshipsSort != null) {
                _queryParams.append("relationships.sort", relationshipsSort);
            }
            if (relationshipsStartDate != null) {
                _queryParams.append("relationships.startDate", relationshipsStartDate);
            }
            if (relationshipsEndDate != null) {
                _queryParams.append("relationships.endDate", relationshipsEndDate);
            }
            if (relationshipsMinShares != null) {
                _queryParams.append("relationships.minShares", relationshipsMinShares.toString());
            }
            if (relationshipsCountry != null) {
                if (Array.isArray(relationshipsCountry)) {
                    for (const _item of relationshipsCountry) {
                        _queryParams.append("relationships.country", _item);
                    }
                }
                else {
                    _queryParams.append("relationships.country", relationshipsCountry);
                }
            }
            if (relationshipsArrivalCountry != null) {
                if (Array.isArray(relationshipsArrivalCountry)) {
                    for (const _item of relationshipsArrivalCountry) {
                        _queryParams.append("relationships.arrivalCountry", _item);
                    }
                }
                else {
                    _queryParams.append("relationships.arrivalCountry", relationshipsArrivalCountry);
                }
            }
            if (relationshipsDepartureCountry != null) {
                if (Array.isArray(relationshipsDepartureCountry)) {
                    for (const _item of relationshipsDepartureCountry) {
                        _queryParams.append("relationships.departureCountry", _item);
                    }
                }
                else {
                    _queryParams.append("relationships.departureCountry", relationshipsDepartureCountry);
                }
            }
            if (relationshipsHsCode != null) {
                _queryParams.append("relationships.hsCode", relationshipsHsCode);
            }
            if (possiblySameAsNext != null) {
                _queryParams.append("possibly_same_as.next", possiblySameAsNext);
            }
            if (possiblySameAsPrev != null) {
                _queryParams.append("possibly_same_as.prev", possiblySameAsPrev);
            }
            if (possiblySameAsLimit != null) {
                _queryParams.append("possibly_same_as.limit", possiblySameAsLimit.toString());
            }
            if (referencedByNext != null) {
                _queryParams.append("referenced_by.next", referencedByNext);
            }
            if (referencedByPrev != null) {
                _queryParams.append("referenced_by.prev", referencedByPrev);
            }
            if (referencedByLimit != null) {
                _queryParams.append("referenced_by.limit", referencedByLimit.toString());
            }
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SayariAnalyticsApiEnvironment.Production, `/v1/entity/${yield serializers.EntityId.jsonOrThrow(id)}`),
                method: "GET",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    client: yield core.Supplier.get(this._options.client),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                queryParameters: _queryParams,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.EntityDetails.parseOrThrow(_response.body, {
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
                    case 404:
                        throw new SayariAnalyticsApi.NotFound(yield serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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
     * The Entity Summary endpoint returns a smaller entity payload
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    entitySummary(id, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: urlJoin((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.SayariAnalyticsApiEnvironment.Production, `/v1/entity_summary/${yield serializers.EntityId.jsonOrThrow(id)}`),
                method: "GET",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    client: yield core.Supplier.get(this._options.client),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.EntityDetails.parseOrThrow(_response.body, {
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
                    case 404:
                        throw new SayariAnalyticsApi.NotFound(yield serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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
