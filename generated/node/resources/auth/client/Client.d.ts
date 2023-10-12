/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SayariAnalyticsApi from "../../..";
export declare namespace Auth {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        client: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Auth {
    protected readonly _options: Auth.Options;
    constructor(_options: Auth.Options);
    /**
     * Hit the auth endpoint to get a bearer token
     * @throws {@link SayariAnalyticsApi.Unauthorized}
     */
    getToken(request: SayariAnalyticsApi.GetToken, requestOptions?: Auth.RequestOptions): Promise<SayariAnalyticsApi.AccessToken>;
    protected _getAuthorizationHeader(): Promise<string | undefined>;
}
