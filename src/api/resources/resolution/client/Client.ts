/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Sayari from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Resolution {
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

export class Resolution {
    constructor(protected readonly _options: Resolution.Options = {}) {}

    /**
     * The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.
     *
     * @param {Sayari.Resolution} request
     * @param {Resolution.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Sayari.BadRequest}
     * @throws {@link Sayari.Unauthorized}
     * @throws {@link Sayari.MethodNotAllowed}
     * @throws {@link Sayari.NotAcceptable}
     * @throws {@link Sayari.RateLimitExceeded}
     * @throws {@link Sayari.InternalServerError}
     *
     * @example
     *     await client.resolution.resolution({
     *         name: "Thomas Bangalter",
     *         address: "8 AVENUE RACHEL",
     *         country: "FRA"
     *     })
     *
     * @example
     *     await client.resolution.resolution({
     *         name: "Oleg Deripaska",
     *         country: "RUS"
     *     })
     */
    public async resolution(
        request: Sayari.Resolution = {},
        requestOptions?: Resolution.RequestOptions
    ): Promise<Sayari.ResolutionResponse> {
        const {
            limit,
            offset,
            name,
            address,
            city,
            state,
            country,
            identifier,
            dateOfBirth,
            contact,
            type: type_,
            profile,
            nameMinPercentage,
            nameMinTokens,
            minimumScoreThreshold,
            searchFallback,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (name != null) {
            if (Array.isArray(name)) {
                _queryParams["name"] = name.map((item) => item);
            } else {
                _queryParams["name"] = name;
            }
        }

        if (address != null) {
            if (Array.isArray(address)) {
                _queryParams["address"] = address.map((item) => item);
            } else {
                _queryParams["address"] = address;
            }
        }

        if (city != null) {
            if (Array.isArray(city)) {
                _queryParams["city"] = city.map((item) => item);
            } else {
                _queryParams["city"] = city;
            }
        }

        if (state != null) {
            if (Array.isArray(state)) {
                _queryParams["state"] = state.map((item) => item);
            } else {
                _queryParams["state"] = state;
            }
        }

        if (country != null) {
            if (Array.isArray(country)) {
                _queryParams["country"] = country.map((item) => item);
            } else {
                _queryParams["country"] = country;
            }
        }

        if (identifier != null) {
            if (Array.isArray(identifier)) {
                _queryParams["identifier"] = identifier.map((item) =>
                    typeof item === "string" ? item : JSON.stringify(item)
                );
            } else {
                _queryParams["identifier"] = typeof identifier === "string" ? identifier : JSON.stringify(identifier);
            }
        }

        if (dateOfBirth != null) {
            if (Array.isArray(dateOfBirth)) {
                _queryParams["date_of_birth"] = dateOfBirth.map((item) => item);
            } else {
                _queryParams["date_of_birth"] = dateOfBirth;
            }
        }

        if (contact != null) {
            if (Array.isArray(contact)) {
                _queryParams["contact"] = contact.map((item) => item);
            } else {
                _queryParams["contact"] = contact;
            }
        }

        if (type_ != null) {
            if (Array.isArray(type_)) {
                _queryParams["type"] = type_.map((item) => item);
            } else {
                _queryParams["type"] = type_;
            }
        }

        if (profile != null) {
            _queryParams["profile"] = profile;
        }

        if (nameMinPercentage != null) {
            _queryParams["name_min_percentage"] = nameMinPercentage.toString();
        }

        if (nameMinTokens != null) {
            _queryParams["name_min_tokens"] = nameMinTokens.toString();
        }

        if (minimumScoreThreshold != null) {
            _queryParams["minimum_score_threshold"] = minimumScoreThreshold.toString();
        }

        if (searchFallback != null) {
            _queryParams["search_fallback"] = searchFallback.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                "/v1/resolution"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.1.18",
                "User-Agent": "@sayari/sdk/0.1.18",
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
            return serializers.ResolutionResponse.parseOrThrow(_response.body, {
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
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 406:
                    throw new Sayari.NotAcceptable(
                        serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
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
     * The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.
     *
     * @param {Sayari.ResolutionPost} request
     * @param {Resolution.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Sayari.BadRequest}
     * @throws {@link Sayari.Unauthorized}
     * @throws {@link Sayari.MethodNotAllowed}
     * @throws {@link Sayari.NotAcceptable}
     * @throws {@link Sayari.RateLimitExceeded}
     * @throws {@link Sayari.InternalServerError}
     *
     * @example
     *     await client.resolution.resolutionPost({
     *         limit: 1,
     *         body: {
     *             name: ["victoria beckham limited"]
     *         }
     *     })
     *
     * @example
     *     await client.resolution.resolutionPost({
     *         limit: 1,
     *         body: {
     *             name: ["victoria beckham limited"],
     *             profile: "suppliers"
     *         }
     *     })
     */
    public async resolutionPost(
        request: Sayari.ResolutionPost,
        requestOptions?: Resolution.RequestOptions
    ): Promise<Sayari.ResolutionResponse> {
        const { limit, offset, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                "/v1/resolution"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.1.18",
                "User-Agent": "@sayari/sdk/0.1.18",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.ResolutionBody.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ResolutionResponse.parseOrThrow(_response.body, {
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
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 406:
                    throw new Sayari.NotAcceptable(
                        serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
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
