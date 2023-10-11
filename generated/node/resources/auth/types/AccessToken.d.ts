/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AccessToken: core.serialization.ObjectSchema<serializers.AccessToken.Raw, SayariAnalyticsApi.AccessToken>;
export declare namespace AccessToken {
    interface Raw {
        access_token: string;
        expires_in: number;
        token_type: string;
    }
}
