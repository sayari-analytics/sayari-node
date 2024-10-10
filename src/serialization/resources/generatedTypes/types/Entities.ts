/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Entities: core.serialization.Schema<serializers.Entities.Raw, Sayari.Entities> = core.serialization.enum_([
    "shipment",
    "unknown",
    "aircraft",
    "vessel",
    "security",
    "tradename",
    "legal_matter",
    "company",
    "generic",
    "property",
    "intellectual_property",
    "person",
]);

export declare namespace Entities {
    type Raw =
        | "shipment"
        | "unknown"
        | "aircraft"
        | "vessel"
        | "security"
        | "tradename"
        | "legal_matter"
        | "company"
        | "generic"
        | "property"
        | "intellectual_property"
        | "person";
}
