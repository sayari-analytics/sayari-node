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
        timeoutInSeconds?: number;
        maxRetries?: number;
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
     *     await sayari.resolution.resolution({
     *         name: "victoria beckham limited"
     *     })
     */
    public async resolution(
        request: Sayari.Resolution = {},
        requestOptions?: Resolution.RequestOptions
    ): Promise<Sayari.ResolutionResponse> {
        const { limit, offset, name, identifier, country, address, dateOfBirth, contact, type: type_ } = request;
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

        if (identifier != null) {
            if (Array.isArray(identifier)) {
                _queryParams["identifier"] = identifier.map((item) =>
                    typeof item === "string" ? item : JSON.stringify(item)
                );
            } else {
                _queryParams["identifier"] = typeof identifier === "string" ? identifier : JSON.stringify(identifier);
            }
        }

        if (country != null) {
            if (Array.isArray(country)) {
                _queryParams["country"] = country.map((item) => item);
            } else {
                _queryParams["country"] = country;
            }
        }

        if (address != null) {
            if (Array.isArray(address)) {
                _queryParams["address"] = address.map((item) => item);
            } else {
                _queryParams["address"] = address;
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
                "X-Fern-SDK-Version": "0.0.247",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ResolutionResponse.parseOrThrow(_response.body, {
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
                        await serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Sayari.Unauthorized(
                        await serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        await serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 406:
                    throw new Sayari.NotAcceptable(
                        await serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Sayari.RateLimitExceeded(
                        await serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Sayari.InternalServerError(
                        await serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
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
     *     await sayari.resolution.resolutionPost({
     *         limit: 2,
     *         name: ["victoria beckham limited"]
     *     })
     */
    public async resolutionPost(
        request: Sayari.ResolutionPost = {},
        requestOptions?: Resolution.RequestOptions
    ): Promise<Sayari.ResolutionResponse> {
        const { limit, offset, ..._body } = request;
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
                "X-Fern-SDK-Version": "0.0.247",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ResolutionPost.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ResolutionResponse.parseOrThrow(_response.body, {
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
                        await serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Sayari.Unauthorized(
                        await serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 405:
                    throw new Sayari.MethodNotAllowed(
                        await serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 406:
                    throw new Sayari.NotAcceptable(
                        await serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Sayari.RateLimitExceeded(
                        await serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Sayari.InternalServerError(
                        await serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
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
