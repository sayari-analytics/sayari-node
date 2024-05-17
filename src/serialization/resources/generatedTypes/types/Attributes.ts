/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Attributes: core.serialization.Schema<serializers.Attributes.Raw, Sayari.Attributes> =
    core.serialization.enum_([
        "date_of_birth",
        "company_type",
        "gender",
        "additional_information",
        "translated_name",
        "address",
        "business_purpose",
        "shares",
        "contact",
        "name",
        "status",
        "position",
        "generic",
        "monetary_value",
        "finances",
        "identifier",
        "weak_identifier",
        "risk_intelligence",
        "financials",
        "country",
        "measurement",
        "person_status",
    ]);

export declare namespace Attributes {
    type Raw =
        | "date_of_birth"
        | "company_type"
        | "gender"
        | "additional_information"
        | "translated_name"
        | "address"
        | "business_purpose"
        | "shares"
        | "contact"
        | "name"
        | "status"
        | "position"
        | "generic"
        | "monetary_value"
        | "finances"
        | "identifier"
        | "weak_identifier"
        | "risk_intelligence"
        | "financials"
        | "country"
        | "measurement"
        | "person_status";
}
