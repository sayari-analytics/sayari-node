/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Sayari from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Entity {
    interface Options {
        environment?: core.Supplier<environments.SayariEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Entity {
    constructor(protected readonly _options: Entity.Options = {}) {}

    /**
     * <Note>To retrieve a L1 Due Dilligence PDF Report. Include 'Accept: application/pdf' in request headers.</Note> Retrieve an entity profile from the database based on the entity ID. This endpoint returns the full profile, entity_summary returns the same payload minus relationships.
     *
     * @param {string} id - Unique identifier of the entity
     * @param {Sayari.GetEntity} request
     * @param {Entity.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Sayari.BadRequest}
     * @throws {@link Sayari.Unauthorized}
     * @throws {@link Sayari.NotFound}
     * @throws {@link Sayari.MethodNotAllowed}
     * @throws {@link Sayari.RateLimitExceeded}
     * @throws {@link Sayari.InternalServerError}
     *
     * @example
     *     await client.entity.getEntity("mGq1lpuqKssNWTjIokuPeA", {
     *         attributesNameLimit: 1,
     *         attributesAddressLimit: 1,
     *         attributesCountryLimit: 1,
     *         attributesAdditionalInformationLimit: 1,
     *         attributesBusinessPurposeLimit: 1,
     *         attributesCompanyTypeLimit: 1,
     *         attributesIdentifierLimit: 1,
     *         attributesStatusLimit: 1,
     *         relationshipsLimit: 1,
     *         possiblySameAsLimit: 1,
     *         referencedByLimit: 1
     *     })
     */
    public async getEntity(
        id: string,
        request: Sayari.GetEntity = {},
        requestOptions?: Entity.RequestOptions
    ): Promise<Sayari.GetEntityResponse> {
        const {
            attributesAdditionalInformationNext,
            attributesAdditionalInformationPrev,
            attributesAdditionalInformationLimit,
            attributesAddressNext,
            attributesAddressPrev,
            attributesAddressLimit,
            attributesBusinessPurposeNext,
            attributesBusinessPurposePrev,
            attributesBusinessPurposeLimit,
            attributesCompanyTypeNext,
            attributesCompanyTypePrev,
            attributesCompanyTypeLimit,
            attributesCountryNext,
            attributesCountryPrev,
            attributesCountryLimit,
            attributesIdentifierNext,
            attributesIdentifierPrev,
            attributesIdentifierLimit,
            attributesNameNext,
            attributesNamePrev,
            attributesNameLimit,
            attributesStatusNext,
            attributesStatusPrev,
            attributesStatusLimit,
            relationshipsNext,
            relationshipsPrev,
            relationshipsLimit,
            relationshipsType,
            relationshipsSort,
            relationshipsStartDate,
            relationshipsEndDate,
            relationshipsMinShares,
            relationshipsCountry,
            relationshipsArrivalCountry,
            relationshipsArrivalState,
            relationshipsArrivalCity,
            relationshipsDepartureCountry,
            relationshipsDepartureState,
            relationshipsDepartureCity,
            relationshipsPartnerName,
            relationshipsPartnerRisk,
            relationshipsHsCode,
            possiblySameAsNext,
            possiblySameAsPrev,
            possiblySameAsLimit,
            referencedByNext,
            referencedByPrev,
            referencedByLimit,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (attributesAdditionalInformationNext != null) {
            _queryParams["attributes.additional_information.next"] = attributesAdditionalInformationNext;
        }

        if (attributesAdditionalInformationPrev != null) {
            _queryParams["attributes.additional_information.prev"] = attributesAdditionalInformationPrev;
        }

        if (attributesAdditionalInformationLimit != null) {
            _queryParams["attributes.additional_information.limit"] = attributesAdditionalInformationLimit.toString();
        }

        if (attributesAddressNext != null) {
            _queryParams["attributes.address.next"] = attributesAddressNext;
        }

        if (attributesAddressPrev != null) {
            _queryParams["attributes.address.prev"] = attributesAddressPrev;
        }

        if (attributesAddressLimit != null) {
            _queryParams["attributes.address.limit"] = attributesAddressLimit.toString();
        }

        if (attributesBusinessPurposeNext != null) {
            _queryParams["attributes.business_purpose.next"] = attributesBusinessPurposeNext;
        }

        if (attributesBusinessPurposePrev != null) {
            _queryParams["attributes.business_purpose.prev"] = attributesBusinessPurposePrev;
        }

        if (attributesBusinessPurposeLimit != null) {
            _queryParams["attributes.business_purpose.limit"] = attributesBusinessPurposeLimit.toString();
        }

        if (attributesCompanyTypeNext != null) {
            _queryParams["attributes.company_type.next"] = attributesCompanyTypeNext;
        }

        if (attributesCompanyTypePrev != null) {
            _queryParams["attributes.company_type.prev"] = attributesCompanyTypePrev;
        }

        if (attributesCompanyTypeLimit != null) {
            _queryParams["attributes.company_type.limit"] = attributesCompanyTypeLimit.toString();
        }

        if (attributesCountryNext != null) {
            _queryParams["attributes.country.next"] = attributesCountryNext;
        }

        if (attributesCountryPrev != null) {
            _queryParams["attributes.country.prev"] = attributesCountryPrev;
        }

        if (attributesCountryLimit != null) {
            _queryParams["attributes.country.limit"] = attributesCountryLimit.toString();
        }

        if (attributesIdentifierNext != null) {
            _queryParams["attributes.identifier.next"] = attributesIdentifierNext;
        }

        if (attributesIdentifierPrev != null) {
            _queryParams["attributes.identifier.prev"] = attributesIdentifierPrev;
        }

        if (attributesIdentifierLimit != null) {
            _queryParams["attributes.identifier.limit"] = attributesIdentifierLimit.toString();
        }

        if (attributesNameNext != null) {
            _queryParams["attributes.name.next"] = attributesNameNext;
        }

        if (attributesNamePrev != null) {
            _queryParams["attributes.name.prev"] = attributesNamePrev;
        }

        if (attributesNameLimit != null) {
            _queryParams["attributes.name.limit"] = attributesNameLimit.toString();
        }

        if (attributesStatusNext != null) {
            _queryParams["attributes.status.next"] = attributesStatusNext;
        }

        if (attributesStatusPrev != null) {
            _queryParams["attributes.status.prev"] = attributesStatusPrev;
        }

        if (attributesStatusLimit != null) {
            _queryParams["attributes.status.limit"] = attributesStatusLimit.toString();
        }

        if (relationshipsNext != null) {
            _queryParams["relationships.next"] = relationshipsNext;
        }

        if (relationshipsPrev != null) {
            _queryParams["relationships.prev"] = relationshipsPrev;
        }

        if (relationshipsLimit != null) {
            _queryParams["relationships.limit"] = relationshipsLimit.toString();
        }

        if (relationshipsType != null) {
            _queryParams["relationships.type"] = relationshipsType;
        }

        if (relationshipsSort != null) {
            _queryParams["relationships.sort"] = relationshipsSort;
        }

        if (relationshipsStartDate != null) {
            _queryParams["relationships.startDate"] = relationshipsStartDate;
        }

        if (relationshipsEndDate != null) {
            _queryParams["relationships.endDate"] = relationshipsEndDate;
        }

        if (relationshipsMinShares != null) {
            _queryParams["relationships.minShares"] = relationshipsMinShares.toString();
        }

        if (relationshipsCountry != null) {
            if (Array.isArray(relationshipsCountry)) {
                _queryParams["relationships.country"] = relationshipsCountry.map((item) => item);
            } else {
                _queryParams["relationships.country"] = relationshipsCountry;
            }
        }

        if (relationshipsArrivalCountry != null) {
            if (Array.isArray(relationshipsArrivalCountry)) {
                _queryParams["relationships.arrivalCountry"] = relationshipsArrivalCountry.map((item) => item);
            } else {
                _queryParams["relationships.arrivalCountry"] = relationshipsArrivalCountry;
            }
        }

        if (relationshipsArrivalState != null) {
            _queryParams["relationships.arrivalState"] = relationshipsArrivalState;
        }

        if (relationshipsArrivalCity != null) {
            _queryParams["relationships.arrivalCity"] = relationshipsArrivalCity;
        }

        if (relationshipsDepartureCountry != null) {
            if (Array.isArray(relationshipsDepartureCountry)) {
                _queryParams["relationships.departureCountry"] = relationshipsDepartureCountry.map((item) => item);
            } else {
                _queryParams["relationships.departureCountry"] = relationshipsDepartureCountry;
            }
        }

        if (relationshipsDepartureState != null) {
            _queryParams["relationships.departureState"] = relationshipsDepartureState;
        }

        if (relationshipsDepartureCity != null) {
            _queryParams["relationships.departureCity"] = relationshipsDepartureCity;
        }

        if (relationshipsPartnerName != null) {
            _queryParams["relationships.partnerName"] = relationshipsPartnerName;
        }

        if (relationshipsPartnerRisk != null) {
            if (Array.isArray(relationshipsPartnerRisk)) {
                _queryParams["relationships.partnerRisk"] = relationshipsPartnerRisk.map((item) => item);
            } else {
                _queryParams["relationships.partnerRisk"] = relationshipsPartnerRisk;
            }
        }

        if (relationshipsHsCode != null) {
            _queryParams["relationships.hsCode"] = relationshipsHsCode;
        }

        if (possiblySameAsNext != null) {
            _queryParams["possibly_same_as.next"] = possiblySameAsNext;
        }

        if (possiblySameAsPrev != null) {
            _queryParams["possibly_same_as.prev"] = possiblySameAsPrev;
        }

        if (possiblySameAsLimit != null) {
            _queryParams["possibly_same_as.limit"] = possiblySameAsLimit.toString();
        }

        if (referencedByNext != null) {
            _queryParams["referenced_by.next"] = referencedByNext;
        }

        if (referencedByPrev != null) {
            _queryParams["referenced_by.prev"] = referencedByPrev;
        }

        if (referencedByLimit != null) {
            _queryParams["referenced_by.limit"] = referencedByLimit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                `/v1/entity/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.1.26",
                "User-Agent": "@sayari/sdk/0.1.26",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.GetEntityResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Sayari.BadRequest(
                        serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Sayari.Unauthorized(
                        serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Sayari.NotFound(
                        serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Sayari.RateLimitExceeded(
                        serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Sayari.InternalServerError(
                        serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SayariError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SayariError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SayariTimeoutError();
            case "unknown":
                throw new errors.SayariError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * The Entity Summary endpoint returns a similar payload, minus relationships.
     *
     * @param {string} id - Unique identifier of the entity
     * @param {Entity.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Sayari.BadRequest}
     * @throws {@link Sayari.Unauthorized}
     * @throws {@link Sayari.NotFound}
     * @throws {@link Sayari.MethodNotAllowed}
     * @throws {@link Sayari.RateLimitExceeded}
     * @throws {@link Sayari.InternalServerError}
     *
     * @example
     *     await client.entity.entitySummary("mGq1lpuqKssNWTjIokuPeA")
     */
    public async entitySummary(
        id: string,
        requestOptions?: Entity.RequestOptions
    ): Promise<Sayari.EntitySummaryResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                `/v1/entity_summary/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.1.26",
                "User-Agent": "@sayari/sdk/0.1.26",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EntitySummaryResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Sayari.BadRequest(
                        serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Sayari.Unauthorized(
                        serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Sayari.NotFound(
                        serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Sayari.RateLimitExceeded(
                        serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Sayari.InternalServerError(
                        serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SayariError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SayariError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SayariTimeoutError();
            case "unknown":
                throw new errors.SayariError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
