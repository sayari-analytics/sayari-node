/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const TranslatedNameData: core.serialization.ObjectSchema<serializers.TranslatedNameData.Raw, SayariAnalyticsApi.TranslatedNameData>;
export declare namespace TranslatedNameData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.TranslatedNameProperties.Raw;
    }
}
