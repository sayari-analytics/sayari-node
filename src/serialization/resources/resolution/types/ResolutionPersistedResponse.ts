/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ResolutionPersistedResponseFields } from "./ResolutionPersistedResponseFields";
import { ResolutionPersistedResult } from "./ResolutionPersistedResult";

export const ResolutionPersistedResponse: core.serialization.ObjectSchema<
    serializers.ResolutionPersistedResponse.Raw,
    Sayari.ResolutionPersistedResponse
> = core.serialization.object({
    fields: ResolutionPersistedResponseFields,
    data: core.serialization.list(ResolutionPersistedResult),
});

export declare namespace ResolutionPersistedResponse {
    interface Raw {
        fields: ResolutionPersistedResponseFields.Raw;
        data: ResolutionPersistedResult.Raw[];
    }
}