/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { MonetaryValueData } from "./MonetaryValueData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const MonetaryValueInfo: core.serialization.ObjectSchema<
    serializers.MonetaryValueInfo.Raw,
    Sayari.MonetaryValueInfo
> = core.serialization
    .object({
        data: core.serialization.list(MonetaryValueData),
        next: core.serialization.unknown().optional(),
        offset: core.serialization.number().optional(),
    })
    .extend(PaginatedResponse);

export declare namespace MonetaryValueInfo {
    export interface Raw extends PaginatedResponse.Raw {
        data: MonetaryValueData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
