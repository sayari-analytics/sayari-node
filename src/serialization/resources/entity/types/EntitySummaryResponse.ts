/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const EntitySummaryResponse: core.serialization.ObjectSchema<
    serializers.EntitySummaryResponse.Raw,
    SayariAnalyticsApi.EntitySummaryResponse
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).EntityDetails));

export declare namespace EntitySummaryResponse {
    interface Raw extends serializers.EntityDetails.Raw {}
}