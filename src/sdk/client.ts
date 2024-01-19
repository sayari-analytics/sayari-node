
import {SayariAnalyticsApiClient as ApiClient} from "../Client";
import {SayariAnalyticsApi} from "../";
import {Conn} from "./conn"

export declare namespace SayariApiClient {
    interface Options extends ApiClient.Options{
        credentials: SayariAnalyticsApi.GetToken
    }
}

export class SayariApiClient extends ApiClient {
    constructor(protected _options: SayariApiClient.Options) {
        super(_options)
        this._options.clientName = SayariAnalyticsApi.ClientName.Node
        this._options.credentials = {
            clientId: _options.credentials.clientId,
            clientSecret: _options.credentials.clientSecret,
            audience: SayariAnalyticsApi.Audience.Sayari,
            grantType: SayariAnalyticsApi.GrantType.ClientCredentials
        }
    }

    protected _conn: Conn | undefined;

    public get conn(): Conn {
        return (this._conn ??= new Conn(this._options));
    }
}
