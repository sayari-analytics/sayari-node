/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Notifications {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Notifications {
    constructor(protected readonly _options: Notifications.Options = {}) {}

    /**
     * <Callout intent="warning">This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Callout> The Project Notifications endpoint returns a list of notifications on all entities saved to a project.
     *
     * @param {string} id - Unique identifier of the project
     * @param {SayariAnalyticsApi.ProjectNotifications} request
     * @param {Notifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     *
     * @example
     *     await sayariAnalyticsApi.notifications.projectNotifications("0oZnoG", {
     *         limit: 20
     *     })
     */
    public async projectNotifications(
        id: string,
        request: SayariAnalyticsApi.ProjectNotifications = {},
        requestOptions?: Notifications.RequestOptions
    ): Promise<SayariAnalyticsApi.ProjectNotificationsResponse> {
        const { limit, offset } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/notifications/projects/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.198",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ProjectNotificationsResponse.parseOrThrow(_response.body, {
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
                case 404:
                    throw new SayariAnalyticsApi.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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
                case 502:
                    throw new SayariAnalyticsApi.BadGateway(
                        await serializers.BadGatewayResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 520:
                    throw new SayariAnalyticsApi.ConnectionError(
                        await serializers.ConnectionErrorResponse.parseOrThrow(_response.error.body, {
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

    /**
     * <Callout intent="warning">This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Callout> The Resource Notifications endpoint returns a list of notifications for a saved entity.
     *
     * @param {string} id - Unique identifier of the resource
     * @param {SayariAnalyticsApi.ResourceNotifications} request
     * @param {Notifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     *
     * @example
     *     await sayariAnalyticsApi.notifications.resourceNotifications("03ePyj", {
     *         limit: 20
     *     })
     */
    public async resourceNotifications(
        id: string,
        request: SayariAnalyticsApi.ResourceNotifications = {},
        requestOptions?: Notifications.RequestOptions
    ): Promise<SayariAnalyticsApi.ResourceNotificationsResponse> {
        const { limit, offset } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/notifications/resources/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.198",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ResourceNotificationsResponse.parseOrThrow(_response.body, {
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
                case 404:
                    throw new SayariAnalyticsApi.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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
                case 502:
                    throw new SayariAnalyticsApi.BadGateway(
                        await serializers.BadGatewayResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 520:
                    throw new SayariAnalyticsApi.ConnectionError(
                        await serializers.ConnectionErrorResponse.parseOrThrow(_response.error.body, {
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

    /**
     * Deletes all notifications from a project.
     *
     * @param {string} projectId
     * @param {Notifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.notifications.deleteProjectNotifications("YWmNKV")
     */
    public async deleteProjectNotifications(
        projectId: string,
        requestOptions?: Notifications.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/notifications/projects/${encodeURIComponent(projectId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.198",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
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
                case 404:
                    throw new SayariAnalyticsApi.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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

    /**
     * Deletes notifications for saved resources of an entity.
     *
     * @param {string} entityId
     * @param {Notifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.notifications.deleteEntityNotifications("N0xLDy4wcud-M1ZtwdsvRA")
     */
    public async deleteEntityNotifications(
        entityId: string,
        requestOptions?: Notifications.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/notifications/entity/${encodeURIComponent(entityId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.198",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
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
                case 404:
                    throw new SayariAnalyticsApi.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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

    /**
     * Deletes notifications for a saved resource.
     *
     * @param {string} resourceId
     * @param {Notifications.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.notifications.deleteResourceNotifications("oGxxqG")
     */
    public async deleteResourceNotifications(
        resourceId: string,
        requestOptions?: Notifications.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/notifications/resources/${encodeURIComponent(resourceId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.198",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
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
                case 404:
                    throw new SayariAnalyticsApi.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
