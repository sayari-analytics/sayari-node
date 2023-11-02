/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const IdentifierInfo: core.serialization.ObjectSchema<serializers.IdentifierInfo.Raw, SayariAnalyticsApi.IdentifierInfo>;
export declare namespace IdentifierInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.IdentifierData.Raw[];
    }
}
