/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { GenericData } from "./GenericData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const GenericInfo: core.serialization.ObjectSchema<serializers.GenericInfo.Raw, Sayari.GenericInfo> =
    core.serialization
        .object({
            data: core.serialization.list(GenericData),
            next: core.serialization.unknown().optional(),
            offset: core.serialization.number().optional(),
        })
        .extend(PaginatedResponse);

export declare namespace GenericInfo {
    interface Raw extends PaginatedResponse.Raw {
        data: GenericData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
