/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AddressInfo: core.serialization.ObjectSchema<serializers.AddressInfo.Raw, SayariAnalyticsApi.AddressInfo>;
export declare namespace AddressInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.AddressData.Raw[];
    }
}