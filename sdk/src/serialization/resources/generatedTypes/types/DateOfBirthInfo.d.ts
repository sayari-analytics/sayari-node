/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const DateOfBirthInfo: core.serialization.ObjectSchema<serializers.DateOfBirthInfo.Raw, SayariAnalyticsApi.DateOfBirthInfo>;
export declare namespace DateOfBirthInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.DateOfBirthData.Raw[];
    }
}
