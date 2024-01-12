/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Record_ {
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

export class Record_ {
    constructor(protected readonly _options: Record_.Options) {}

    /**
     * Retrieve a record from the database based on the ID
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.record.getRecord("74cf0fc2a62f9c8f4e88f8a0b3ffcca4%2FF0000110%2F1682970471254", {})
     */
    public async getRecord(
        id: SayariAnalyticsApi.RecordId,
        request: SayariAnalyticsApi.GetRecord = {},
        requestOptions?: Record_.RequestOptions
    ): Promise<SayariAnalyticsApi.GetRecordResponse> {
        const { referencesLimit, referencesOffset } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (referencesLimit != null) {
            _queryParams["references.limit"] = referencesLimit.toString();
        }

        if (referencesOffset != null) {
            _queryParams["references.offset"] = referencesOffset.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/record/${await serializers.RecordId.jsonOrThrow(id)}`
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
            return await serializers.GetRecordResponse.parseOrThrow(_response.body, {
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
