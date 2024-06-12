/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Sayari from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace SupplyChain {
    interface Options {
        environment?: core.Supplier<environments.SayariEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class SupplyChain {
    constructor(protected readonly _options: SupplyChain.Options = {}) {}

    /**
     * <Warning>This endpoint is in beta and is subject to change. It is provided for early access and testing purposes only.</Warning> Execute a traversal of the upstream trade network (supply chain) of an entity, returning a set of entities and edges between them.
     *
     * @param {string} id - The root entity identifier.
     * @param {Sayari.UpstreamTradeTraversalRequest} request
     * @param {SupplyChain.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Sayari.BadRequest}
     * @throws {@link Sayari.Unauthorized}
     * @throws {@link Sayari.NotFound}
     * @throws {@link Sayari.MethodNotAllowed}
     * @throws {@link Sayari.RateLimitExceeded}
     * @throws {@link Sayari.InternalServerError}
     *
     * @example
     *     await sayari.supplyChain.upstreamTradeTraversal("ESkH7J-UCRfY5t0_JXIH3w", {
     *         date: "2023-06-01",
     *         hsCode: ["3206"],
     *         components: ["3204"],
     *         maxDepth: 2,
     *         risks: [Sayari.Risk.ForcedLaborUflpaOriginSubtier]
     *     })
     */
    public async upstreamTradeTraversal(
        id: string,
        request: Sayari.UpstreamTradeTraversalRequest = {},
        requestOptions?: SupplyChain.RequestOptions
    ): Promise<Sayari.UpstreamTradeTraversalResponse> {
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
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                `/v1/upstream/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.0.361",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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
                case 404:
                    throw new Sayari.NotFound(
                        await serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
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
