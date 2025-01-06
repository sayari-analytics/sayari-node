/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ResolutionResponseFields } from "./ResolutionResponseFields";
import { ResolutionResult } from "./ResolutionResult";

export const ResolutionResponse: core.serialization.ObjectSchema<
    serializers.ResolutionResponse.Raw,
    Sayari.ResolutionResponse
> = core.serialization.object({
    fields: ResolutionResponseFields,
    data: core.serialization.list(ResolutionResult),
});

export declare namespace ResolutionResponse {
    export interface Raw {
        fields: ResolutionResponseFields.Raw;
        data: ResolutionResult.Raw[];
    }
}
