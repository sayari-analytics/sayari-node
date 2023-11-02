/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AttributeData: core.serialization.ObjectSchema<serializers.AttributeData.Raw, SayariAnalyticsApi.AttributeData>;
export declare namespace AttributeData {
    interface Raw {
        record: string[];
        record_count: number;
    }
}
