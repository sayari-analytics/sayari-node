/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Attributes: core.serialization.Schema<serializers.Attributes.Raw, Sayari.Attributes> =
    core.serialization.enum_([
        "generic",
        "status",
        "financials",
        "contact",
        "business_purpose",
        "finances",
        "name",
        "company_type",
        "identifier",
        "shares",
        "position",
        "additional_information",
        "gender",
        "country",
        "weak_identifier",
        "date_of_birth",
        "person_status",
        "address",
        "monetary_value",
        "translated_name",
        "risk_intelligence",
        "measurement",
    ]);

export declare namespace Attributes {
    type Raw =
        | "generic"
        | "status"
        | "financials"
        | "contact"
        | "business_purpose"
        | "finances"
        | "name"
        | "company_type"
        | "identifier"
        | "shares"
        | "position"
        | "additional_information"
        | "gender"
        | "country"
        | "weak_identifier"
        | "date_of_birth"
        | "person_status"
        | "address"
        | "monetary_value"
        | "translated_name"
        | "risk_intelligence"
        | "measurement";
}
