/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../../index";
export declare namespace Traversal {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        client: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Traversal {
    protected readonly _options: Traversal.Options;
    constructor(_options: Traversal.Options);
    /**
     * The Traversal endpoint returns paths from a single target entity to up to 50 directly or indirectly-related entities. Each path includes information on the 0 to 10 intermediary entities, as well as their connecting relationships. The response's explored_count field indicates the size of the graph subset the application searched. Running a traversal on a highly connected entity with a restrictive set of argument filters and a high max depth will require the application to explore a higher number of traversal paths, which may affect performance.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     */
    traversal(id: SayariAnalyticsApi.EntityId, request?: SayariAnalyticsApi.Traversal, requestOptions?: Traversal.RequestOptions): Promise<SayariAnalyticsApi.TraversalResponse>;
    /**
     * The UBO endpoint returns paths from a single target entity to up to 50 beneficial owners. The endpoint is a shorthand for the equivalent traversal query.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     */
    ubo(id: SayariAnalyticsApi.EntityId, requestOptions?: Traversal.RequestOptions): Promise<SayariAnalyticsApi.TraversalResponse>;
    /**
     * The Ownership endpoint returns paths from a single target entity to up to 50 entities directly or indirectly owned by that entity. The endpoint is a shorthand for the equivalent traversal query.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     */
    ownership(id: SayariAnalyticsApi.EntityId, requestOptions?: Traversal.RequestOptions): Promise<SayariAnalyticsApi.TraversalResponse>;
    /**
     * The Watchlist endpoint returns paths from a single target entity to up to 50 other entities that appear on a watchlist or are peps. The endpoint is a shorthand for the equivalent traversal query.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     */
    watchlist(id: SayariAnalyticsApi.EntityId, requestOptions?: Traversal.RequestOptions): Promise<SayariAnalyticsApi.TraversalResponse>;
    /**
     * The Shortest Path endpoint returns a response identifying the shortest traversal path connecting each pair of entities.
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     * @throws {@link SayariAnalyticsApi.BadGateway}
     * @throws {@link SayariAnalyticsApi.ConnectionError}
     */
    shortestPath(request: SayariAnalyticsApi.ShortestPath, requestOptions?: Traversal.RequestOptions): Promise<SayariAnalyticsApi.ShortestPathResponse>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
