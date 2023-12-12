/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const ContactData: core.serialization.ObjectSchema<serializers.ContactData.Raw, SayariAnalyticsApi.ContactData>;
export declare namespace ContactData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.ContactProperties.Raw;
    }
}
