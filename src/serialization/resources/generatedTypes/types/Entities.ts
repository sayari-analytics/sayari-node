/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Entities: core.serialization.Schema<serializers.Entities.Raw, Sayari.Entities> = core.serialization.enum_([
    "security",
    "company",
    "vessel",
    "unknown",
    "person",
    "intellectual_property",
    "tradename",
    "generic",
    "legal_matter",
    "property",
    "aircraft",
    "shipment",
]);

export declare namespace Entities {
    type Raw =
        | "security"
        | "company"
        | "vessel"
        | "unknown"
        | "person"
        | "intellectual_property"
        | "tradename"
        | "generic"
        | "legal_matter"
        | "property"
        | "aircraft"
        | "shipment";
}
