/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const PersonStatusInfo: core.serialization.ObjectSchema<serializers.PersonStatusInfo.Raw, SayariAnalyticsApi.PersonStatusInfo>;
export declare namespace PersonStatusInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.PersonStatusData.Raw[];
    }
}
