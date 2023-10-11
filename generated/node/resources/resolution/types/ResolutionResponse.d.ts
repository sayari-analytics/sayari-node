/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const ResolutionResponse: core.serialization.ObjectSchema<serializers.ResolutionResponse.Raw, SayariAnalyticsApi.ResolutionResponse>;
export declare namespace ResolutionResponse {
    interface Raw {
        fields: serializers.ResolutionResponseFields.Raw;
        data: serializers.ResolutionResult.Raw[];
    }
}
