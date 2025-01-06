/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const PossiblySameAsMatch: core.serialization.ObjectSchema<
    serializers.PossiblySameAsMatch.Raw,
    Sayari.PossiblySameAsMatch
> = core.serialization.object({
    source: core.serialization.string(),
    target: core.serialization.string(),
});

export declare namespace PossiblySameAsMatch {
    export interface Raw {
        source: string;
        target: string;
    }
}
