/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const RiskIntelligenceProperties: core.serialization.ObjectSchema<serializers.RiskIntelligenceProperties.Raw, SayariAnalyticsApi.RiskIntelligenceProperties>;
export declare namespace RiskIntelligenceProperties {
    interface Raw {
        authority?: string | null;
        list?: string | null;
        program?: string | null;
        reason?: string | null;
        type: serializers.Tag.Raw;
    }
}