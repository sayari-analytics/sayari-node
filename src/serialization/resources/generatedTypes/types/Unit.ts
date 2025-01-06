/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Unit: core.serialization.Schema<serializers.Unit.Raw, Sayari.Unit> = core.serialization.enum_([
    "kilogram",
    "metre",
    "unit",
]);

export declare namespace Unit {
    export type Raw = "kilogram" | "metre" | "unit";
}
