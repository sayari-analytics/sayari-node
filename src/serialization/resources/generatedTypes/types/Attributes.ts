/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Attributes: core.serialization.Schema<serializers.Attributes.Raw, Sayari.Attributes> =
    core.serialization.enum_([
        "status",
        "company_type",
        "name",
        "weak_identifier",
        "address",
        "finances",
        "monetary_value",
        "business_purpose",
        "identifier",
        "financials",
        "measurement",
        "country",
        "risk_intelligence",
        "translated_name",
        "shares",
        "gender",
        "additional_information",
        "contact",
        "position",
        "date_of_birth",
        "person_status",
        "generic",
    ]);

export declare namespace Attributes {
    type Raw =
        | "status"
        | "company_type"
        | "name"
        | "weak_identifier"
        | "address"
        | "finances"
        | "monetary_value"
        | "business_purpose"
        | "identifier"
        | "financials"
        | "measurement"
        | "country"
        | "risk_intelligence"
        | "translated_name"
        | "shares"
        | "gender"
        | "additional_information"
        | "contact"
        | "position"
        | "date_of_birth"
        | "person_status"
        | "generic";
}
