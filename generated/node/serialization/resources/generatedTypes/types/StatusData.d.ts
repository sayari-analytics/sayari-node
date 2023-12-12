/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const StatusData: core.serialization.ObjectSchema<serializers.StatusData.Raw, SayariAnalyticsApi.StatusData>;
export declare namespace StatusData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.StatusProperties.Raw;
    }
}