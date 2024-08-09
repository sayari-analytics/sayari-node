/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Attributes: core.serialization.Schema<serializers.Attributes.Raw, Sayari.Attributes> =
    core.serialization.enum_([
        "address",
        "shares",
        "person_status",
        "name",
        "financials",
        "risk_intelligence",
        "gender",
        "company_type",
        "date_of_birth",
        "measurement",
        "generic",
        "identifier",
        "status",
        "finances",
        "weak_identifier",
        "translated_name",
        "contact",
        "additional_information",
        "position",
        "monetary_value",
        "country",
        "business_purpose",
    ]);

export declare namespace Attributes {
    type Raw =
        | "address"
        | "shares"
        | "person_status"
        | "name"
        | "financials"
        | "risk_intelligence"
        | "gender"
        | "company_type"
        | "date_of_birth"
        | "measurement"
        | "generic"
        | "identifier"
        | "status"
        | "finances"
        | "weak_identifier"
        | "translated_name"
        | "contact"
        | "additional_information"
        | "position"
        | "monetary_value"
        | "country"
        | "business_purpose";
}
