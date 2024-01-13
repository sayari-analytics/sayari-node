/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const GetSourceResponse: core.serialization.ObjectSchema<
    serializers.GetSourceResponse.Raw,
    SayariAnalyticsApi.GetSourceResponse
> = core.serialization.object({}).extend(core.serialization.lazyObject(async () => (await import("../../..")).Source));

export declare namespace GetSourceResponse {
    interface Raw extends serializers.Source.Raw {}
}
