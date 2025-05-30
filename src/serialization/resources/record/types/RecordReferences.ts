/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const RecordReferences: core.serialization.ObjectSchema<
    serializers.RecordReferences.Raw,
    Sayari.RecordReferences
> = core.serialization
    .object({
        next: core.serialization.boolean(),
        offset: core.serialization.number(),
        data: core.serialization.unknown(),
    })
    .extend(PaginatedResponse);

export declare namespace RecordReferences {
    export interface Raw extends PaginatedResponse.Raw {
        next: boolean;
        offset: number;
        data?: unknown;
    }
}
