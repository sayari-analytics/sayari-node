/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { NameData } from "./NameData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const NameInfo: core.serialization.ObjectSchema<serializers.NameInfo.Raw, Sayari.NameInfo> = core.serialization
    .object({
        data: core.serialization.list(NameData),
        next: core.serialization.unknown().optional(),
        offset: core.serialization.number().optional(),
    })
    .extend(PaginatedResponse);

export declare namespace NameInfo {
    export interface Raw extends PaginatedResponse.Raw {
        data: NameData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
