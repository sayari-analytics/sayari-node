/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { ProjectEntity } from "./ProjectEntity";
import { ProjectEntitiesAggs } from "./ProjectEntitiesAggs";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const GetProjectEntitiesResponse: core.serialization.ObjectSchema<
    serializers.GetProjectEntitiesResponse.Raw,
    SayariAnalyticsApi.GetProjectEntitiesResponse
> = core.serialization
    .object({
        next: core.serialization.string().optional(),
        prev: core.serialization.string().optional(),
        data: core.serialization.list(ProjectEntity),
        aggregations: ProjectEntitiesAggs,
    })
    .extend(PaginatedResponse);

export declare namespace GetProjectEntitiesResponse {
    interface Raw extends PaginatedResponse.Raw {
        next?: string | null;
        prev?: string | null;
        data: ProjectEntity.Raw[];
        aggregations: ProjectEntitiesAggs.Raw;
    }
}