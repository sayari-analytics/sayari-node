/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const FinancialsInfo: core.serialization.ObjectSchema<serializers.FinancialsInfo.Raw, SayariAnalyticsApi.FinancialsInfo>;
export declare namespace FinancialsInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.FinancialsData.Raw[];
    }
}