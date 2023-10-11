/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../..";
export declare namespace Search {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Search {
    protected readonly _options: Search.Options;
    constructor(_options: Search.Options);
    /**
     * Search for an entity
     */
    searchEntity(request: SayariAnalyticsApi.SearchEntity, requestOptions?: Search.RequestOptions): Promise<SayariAnalyticsApi.EntitySearchResults>;
    /**
     * Search for a record
     */
    searchRecord(request: SayariAnalyticsApi.SearchRecord, requestOptions?: Search.RequestOptions): Promise<SayariAnalyticsApi.RecordSearchResults>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}