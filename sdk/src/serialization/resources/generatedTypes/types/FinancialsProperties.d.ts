/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const FinancialsProperties: core.serialization.ObjectSchema<serializers.FinancialsProperties.Raw, SayariAnalyticsApi.FinancialsProperties>;
export declare namespace FinancialsProperties {
    interface Raw {
        assets?: number | null;
        currency?: serializers.Currency.Raw | null;
        employees?: number | null;
        liabilities?: number | null;
        net_income?: number | null;
        paid_up_capital?: number | null;
        registered_capital?: number | null;
        revenue?: number | null;
    }
}