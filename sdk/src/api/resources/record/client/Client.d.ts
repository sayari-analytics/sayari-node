/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../..";
export declare namespace Record_ {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        clientName: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Record_ {
    protected readonly _options: Record_.Options;
    constructor(_options: Record_.Options);
    /**
     * Retrieve a record from the database based on the ID
     * @throws {@link SayariAnalyticsApi.BadRequest}
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     * @throws {@link SayariAnalyticsApi.NotFound}
     * @throws {@link SayariAnalyticsApi.MethodNotAllowed}
     * @throws {@link SayariAnalyticsApi.RateLimitExceeded}
     * @throws {@link SayariAnalyticsApi.InternalServerError}
     */
    getRecord(id: SayariAnalyticsApi.RecordId, request?: SayariAnalyticsApi.GetRecord, requestOptions?: Record_.RequestOptions): Promise<SayariAnalyticsApi.RecordDetails>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
