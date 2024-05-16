/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { GenderData } from "./GenderData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const GenderInfo: core.serialization.ObjectSchema<serializers.GenderInfo.Raw, Sayari.GenderInfo> =
    core.serialization
        .object({
            data: core.serialization.list(GenderData),
            next: core.serialization.unknown().optional(),
            offset: core.serialization.number().optional(),
        })
        .extend(PaginatedResponse);

export declare namespace GenderInfo {
    interface Raw extends PaginatedResponse.Raw {
        data: GenderData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
