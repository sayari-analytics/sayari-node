/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { RiskIntelligenceData } from "./RiskIntelligenceData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const RiskIntelligenceInfo: core.serialization.ObjectSchema<
    serializers.RiskIntelligenceInfo.Raw,
    SayariAnalyticsApi.RiskIntelligenceInfo
> = core.serialization
    .object({
        data: core.serialization.list(RiskIntelligenceData),
        next: core.serialization.unknown().optional(),
        offset: core.serialization.number().optional(),
    })
    .extend(PaginatedResponse);

export declare namespace RiskIntelligenceInfo {
    interface Raw extends PaginatedResponse.Raw {
        data: RiskIntelligenceData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}