/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const BusinessPurposeProperties: core.serialization.ObjectSchema<serializers.BusinessPurposeProperties.Raw, SayariAnalyticsApi.BusinessPurposeProperties>;
export declare namespace BusinessPurposeProperties {
    interface Raw {
        code?: string | null;
        standard?: serializers.BusinessPurposeStandard.Raw | null;
        value?: string | null;
    }
}
