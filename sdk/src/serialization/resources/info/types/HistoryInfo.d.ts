/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const HistoryInfo: core.serialization.ObjectSchema<serializers.HistoryInfo.Raw, SayariAnalyticsApi.HistoryInfo>;
export declare namespace HistoryInfo {
    interface Raw {
        user: string;
        environment: string;
        event: string;
        data: serializers.EventInfo.Raw;
        timestamp: string;
    }
}
