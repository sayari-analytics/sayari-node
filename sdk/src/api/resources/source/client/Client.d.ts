/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../../index";
export declare namespace Source {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        client: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Source {
    protected readonly _options: Source.Options;
    constructor(_options: Source.Options);
    /**
     * Returns metadata for all sources that Sayari collects data from
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    listSources(request?: SayariAnalyticsApi.ListSources, requestOptions?: Source.RequestOptions): Promise<SayariAnalyticsApi.SourceList>;
    /**
     * Returns metadata for a source that Sayari collects data from
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    getSource(id: SayariAnalyticsApi.SourceId, requestOptions?: Source.RequestOptions): Promise<SayariAnalyticsApi.Source>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}