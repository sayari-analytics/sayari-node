/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const CountQualifier: core.serialization.Schema<serializers.CountQualifier.Raw, Sayari.CountQualifier> =
    core.serialization.enum_(["eq", "gte"]);

export declare namespace CountQualifier {
    export type Raw = "eq" | "gte";
}
