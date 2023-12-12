/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const ContactInfo: core.serialization.ObjectSchema<serializers.ContactInfo.Raw, SayariAnalyticsApi.ContactInfo>;
export declare namespace ContactInfo {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: serializers.ContactData.Raw[];
    }
}
