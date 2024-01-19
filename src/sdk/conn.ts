import { Auth } from '../api/resources/auth/client/Client'
import { AuthResponse, GetToken } from "../api";
import { SayariAnalyticsApiError } from '../';
import { join } from 'path';
import { Worker } from 'worker_threads';
import * as core from "../core";
import * as environments from "../environments";

export declare namespace Conn {
    interface Options {
        environment?: core.Supplier<environments.SayariAnalyticsApiEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        clientName: core.Supplier<string>;
        credentials: GetToken
    }
}

export class Conn extends Auth {
    constructor(protected _options: Conn.Options) {
        super(_options)
    }

    // TODO: maybe should create a ConnResponse instead of using AuthResponse here.
    // might be able to move into constructor.
    public async connect(): Promise<AuthResponse> {
        try {
            let authResp = await this.setToken()
            this.startTokenWorker(authResp.expiresIn)
            return authResp
        } catch (err) {
            if (err instanceof(SayariAnalyticsApiError)){
                console.log(err.message)
            }
            throw err
        }
    }

    protected async setToken(): Promise<AuthResponse> {
        try {
            const resp = await this.getToken(this._options.credentials);
            this._options.token = resp.accessToken;
            return resp;
        } catch (err) {
            throw err;
        }
    }

    protected startTokenWorker(expiresIn: number): void {
        const tokenWorker = new Worker(
            join(__dirname,'tokenWorker.js'),
            { workerData: expiresIn}
        );

        tokenWorker.postMessage({conn: this, expiresIn: expiresIn})
        tokenWorker.unref()

        process.on('exit', () => {
            try {
                tokenWorker.terminate().then(()=> {process.exitCode = 0})
            } catch (err) {
                throw err
            }
        })
    }

    refreshToken(expiresIn: number): void{
        let refreshIn: number = 2000 /*(expiresIn - 3600) < 3600 ? 0 : (expiresIn - 3600)*/
        console.log(expiresIn)
        this.setToken().then(resp => resp).catch(err => {throw err})
        setTimeout(() =>{this.refreshToken(expiresIn)}, refreshIn)
    }
}
