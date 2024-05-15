/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace SupplyChain {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SupplyChain {
    constructor(protected readonly _options: SupplyChain.Options = {}) {}

    /**
     * <Callout intent="warning">This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Callout> Execute a traversal of the upstream trade network (supply chain) of an entity, returning a set of entities and edges between them.
     *
     * @param {string} id - The root entity identifier.
     * @param {SayariAnalyticsApi.UpstreamTradeTraversalRequest} request
     * @param {SupplyChain.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     *
     * @example
     *     await sayariAnalyticsApi.supplyChain.upstreamTradeTraversal("ESkH7J-UCRfY5t0_JXIH3w", {
     *         date: "2023-06-01",
     *         hsCode: ["3206"],
     *         components: ["3204"],
     *         maxDepth: 2,
     *         risks: [SayariAnalyticsApi.Risk.ForcedLaborUflpaOriginSubtier]
     *     })
     */
    public async upstreamTradeTraversal(
        id: string,
        request: SayariAnalyticsApi.UpstreamTradeTraversalRequest = {},
        requestOptions?: SupplyChain.RequestOptions
    ): Promise<SayariAnalyticsApi.UpstreamTradeTraversalResponse> {
        const {
            countries,
            notCountries,
            risks,
            notRisk,
            hsCode,
            notHsCode,
            components,
            notComponents,
            maxDepth,
            date,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (countries != null) {
            _queryParams["countries"] = JSON.stringify(countries);
        }

        if (notCountries != null) {
            _queryParams["-countries"] = JSON.stringify(notCountries);
        }

        if (risks != null) {
            _queryParams["risks"] = JSON.stringify(risks);
        }

        if (notRisk != null) {
            _queryParams["-risks"] = JSON.stringify(notRisk);
        }

        if (hsCode != null) {
            _queryParams["hs_code"] = JSON.stringify(hsCode);
        }

        if (notHsCode != null) {
            _queryParams["-hs_code"] = JSON.stringify(notHsCode);
        }

        if (components != null) {
            _queryParams["components"] = JSON.stringify(components);
        }

        if (notComponents != null) {
            _queryParams["-components"] = JSON.stringify(notComponents);
        }

        if (maxDepth != null) {
            _queryParams["max_depth"] = maxDepth.toString();
        }

        if (date != null) {
            _queryParams["date"] = date;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.SayariAnalyticsApiEnvironment.Production,
                `/v1/upstream/${encodeURIComponent(id)}`
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
            return await serializers.UpstreamTradeTraversalResponse.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
