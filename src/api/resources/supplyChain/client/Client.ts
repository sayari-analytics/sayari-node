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
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
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
     *     await client.supplyChain.upstreamTradeTraversal("ESkH7J-UCRfY5t0_JXIH3w", {
     *         minDate: "2023-03-15",
     *         product: ["3204"],
     *         risk: [Sayari.Risk.ForcedLaborXinjiangOriginSubtier]
     *     })
     */
    public async upstreamTradeTraversal(
        id: string,
        request: Sayari.UpstreamTradeTraversalRequest = {},
        requestOptions?: SupplyChain.RequestOptions
    ): Promise<Sayari.UpstreamTradeTraversalResponse> {
        const {
            risk,
            notRisk,
            countries,
            notCountries,
            product,
            notProduct,
            component,
            notComponent,
            minDate,
            maxDate,
            maxDepth,
            limit,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (risk != null) {
            _queryParams["risk"] = JSON.stringify(risk);
        }

        if (notRisk != null) {
            _queryParams["-risk"] = JSON.stringify(notRisk);
        }

        if (countries != null) {
            _queryParams["countries"] = JSON.stringify(countries);
        }

        if (notCountries != null) {
            _queryParams["-countries"] = JSON.stringify(notCountries);
        }

        if (product != null) {
            _queryParams["product"] = JSON.stringify(product);
        }

        if (notProduct != null) {
            _queryParams["-product"] = JSON.stringify(notProduct);
        }

        if (component != null) {
            _queryParams["component"] = JSON.stringify(component);
        }

        if (notComponent != null) {
            _queryParams["-component"] = JSON.stringify(notComponent);
        }

        if (minDate != null) {
            _queryParams["min_date"] = minDate;
        }

        if (maxDate != null) {
            _queryParams["max_date"] = maxDate;
        }

        if (maxDepth != null) {
            _queryParams["max_depth"] = maxDepth.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SayariEnvironment.Production,
                `/v1/supply_chain/upstream/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@sayari/sdk",
                "X-Fern-SDK-Version": "0.1.11",
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
            return serializers.UpstreamTradeTraversalResponse.parseOrThrow(_response.body, {
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
