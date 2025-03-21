/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Weight: core.serialization.ObjectSchema<serializers.Weight.Raw, Sayari.Weight> = core.serialization.object(
    {
        value: core.serialization.number(),
        unit: core.serialization.string(),
        type: core.serialization.string(),
    },
);

export declare namespace Weight {
    export interface Raw {
        value: number;
        unit: string;
        type: string;
    }
}
