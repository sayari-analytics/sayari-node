/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Entities: core.serialization.Schema<serializers.Entities.Raw, Sayari.Entities> = core.serialization.enum_([
    "unknown",
    "person",
    "legal_matter",
    "intellectual_property",
    "vessel",
    "company",
    "aircraft",
    "tradename",
    "generic",
    "security",
    "shipment",
    "property",
]);

export declare namespace Entities {
    type Raw =
        | "unknown"
        | "person"
        | "legal_matter"
        | "intellectual_property"
        | "vessel"
        | "company"
        | "aircraft"
        | "tradename"
        | "generic"
        | "security"
        | "shipment"
        | "property";
}
