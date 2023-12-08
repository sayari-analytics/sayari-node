/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const NotAcceptableResponse: core.serialization.ObjectSchema<serializers.NotAcceptableResponse.Raw, SayariAnalyticsApi.NotAcceptableResponse>;
export declare namespace NotAcceptableResponse {
    interface Raw {
        status: number;
        message: string[];
        success: boolean;
    }
}
