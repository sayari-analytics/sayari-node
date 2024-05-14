/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { PsaEntity } from "./PsaEntity";
import { PossiblySameAsMatch } from "./PossiblySameAsMatch";

export const PossiblySameAsData: core.serialization.ObjectSchema<
    serializers.PossiblySameAsData.Raw,
    SayariAnalyticsApi.PossiblySameAsData
> = core.serialization.object({
    editable: core.serialization.boolean().optional(),
    entity: PsaEntity,
    matches: core.serialization.record(core.serialization.string(), core.serialization.list(PossiblySameAsMatch)),
});

export declare namespace PossiblySameAsData {
    interface Raw {
        editable?: boolean | null;
        entity: PsaEntity.Raw;
        matches: Record<string, PossiblySameAsMatch.Raw[]>;
    }
}
