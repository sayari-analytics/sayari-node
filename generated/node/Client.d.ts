/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "./environments";
import * as core from "./core";
import { Auth } from "./api/resources/auth/client/Client";
import { Entity } from "./api/resources/entity/client/Client";
import { Record_ } from "./api/resources/record/client/Client";
import { Resolution } from "./api/resources/resolution/client/Client";
import { Search } from "./api/resources/search/client/Client";
import { Source } from "./api/resources/source/client/Client";
import { Trade } from "./api/resources/trade/client/Client";
import { Traversal } from "./api/resources/traversal/client/Client";
export declare namespace SayariAnalyticsApiClient {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        client: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class SayariAnalyticsApiClient {
    protected readonly _options: SayariAnalyticsApiClient.Options;
    constructor(_options: SayariAnalyticsApiClient.Options);
    protected _auth: Auth | undefined;
    get auth(): Auth;
    protected _entity: Entity | undefined;
    get entity(): Entity;
    protected _record: Record_ | undefined;
    get record(): Record_;
    protected _resolution: Resolution | undefined;
    get resolution(): Resolution;
    protected _search: Search | undefined;
    get search(): Search;
    protected _source: Source | undefined;
    get source(): Source;
    protected _trade: Trade | undefined;
    get trade(): Trade;
    protected _traversal: Traversal | undefined;
    get traversal(): Traversal;
}
