/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { PersonStatusData } from "./PersonStatusData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const PersonStatusInfo: core.serialization.ObjectSchema<
    serializers.PersonStatusInfo.Raw,
    SayariAnalyticsApi.PersonStatusInfo
> = core.serialization
    .object({
        data: core.serialization.list(PersonStatusData),
        next: core.serialization.unknown().optional(),
        offset: core.serialization.number().optional(),
    })
    .extend(PaginatedResponse);

export declare namespace PersonStatusInfo {
    interface Raw extends PaginatedResponse.Raw {
        data: PersonStatusData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
