/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AttributeDetails: core.serialization.ObjectSchema<serializers.AttributeDetails.Raw, SayariAnalyticsApi.AttributeDetails>;
export declare namespace AttributeDetails {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.AttributeData.Raw[];
    }
}