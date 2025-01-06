/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ResolutionResult } from "./ResolutionResult";

export const ResolutionPersistedResult: core.serialization.ObjectSchema<
    serializers.ResolutionPersistedResult.Raw,
    Sayari.ResolutionPersistedResult
> = core.serialization
    .object({
        savedEntityId: core.serialization.property("saved_entity_id", core.serialization.string()),
    })
    .extend(ResolutionResult);

export declare namespace ResolutionPersistedResult {
    export interface Raw extends ResolutionResult.Raw {
        saved_entity_id: string;
    }
}
