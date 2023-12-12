/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const StatusProperties: core.serialization.ObjectSchema<serializers.StatusProperties.Raw, SayariAnalyticsApi.StatusProperties>;
export declare namespace StatusProperties {
    interface Raw {
        context?: serializers.StatusContext.Raw | null;
        text?: string | null;
        value?: serializers.CompanyStatus.Raw | null;
    }
}