/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const ContactType: core.serialization.Schema<serializers.ContactType.Raw, SayariAnalyticsApi.ContactType> =
    core.serialization.enum_(["phone_number", "fax", "email", "url"]);

export declare namespace ContactType {
    type Raw = "phone_number" | "fax" | "email" | "url";
}