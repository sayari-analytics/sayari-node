/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const SourceCountInfo: core.serialization.ObjectSchema<serializers.SourceCountInfo.Raw, Sayari.SourceCountInfo> =
    core.serialization.object({
        count: core.serialization.number(),
        label: core.serialization.string(),
    });

export declare namespace SourceCountInfo {
    export interface Raw {
        count: number;
        label: string;
    }
}
