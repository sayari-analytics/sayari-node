/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Resolution {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        clientName: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Resolution {
    constructor(protected readonly _options: Resolution.Options) {}

    /**
     * The resolution endpoints allow users to search for matching entities against a provided list of attributes. The endpoint is similar to the search endpoint, except it's tuned to only return the best match so the client doesn't need to do as much or any post-processing work to filter down results.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.NotAcceptable}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.resolution.resolution({
     *         name: "victoria beckham limited"
     *     })
     */
    public async resolution(
        request: SayariAnalyticsApi.Resolution = {},
        requestOptions?: Resolution.RequestOptions
    ): Promise<SayariAnalyticsApi.ResolutionResponse> {
        const { name, identifier, country, address, dateOfBirth, contact, type: type_ } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (name != null) {
            if (Array.isArray(name)) {
                _queryParams["name"] = name.map((item) => item);
            } else {
                _queryParams["name"] = name;
            }
        }

        if (identifier != null) {
            if (Array.isArray(identifier)) {
                _queryParams["identifier"] = identifier.map((item) => item);
            } else {
                _queryParams["identifier"] = identifier;
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
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                "/v1/resolution"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "client-name": await core.Supplier.get(this._options.clientName),
                "X-Fern-Language": "JavaScript",
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
                    throw new SayariAnalyticsApi.BadRequest(
                        await serializers.BadRequestResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new SayariAnalyticsApi.Unauthorized(
                        await serializers.UnauthorizedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 405:
                    throw new SayariAnalyticsApi.MethodNotAllowed(
                        await serializers.MethodNotAllowedResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 406:
                    throw new SayariAnalyticsApi.NotAcceptable(
                        await serializers.NotAcceptableResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new SayariAnalyticsApi.RateLimitExceeded(
                        await serializers.RateLimitResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new SayariAnalyticsApi.InternalServerError(
                        await serializers.InternalServerErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
