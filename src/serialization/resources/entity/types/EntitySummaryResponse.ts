/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const EntitySummaryResponse: core.serialization.ObjectSchema<
    serializers.EntitySummaryResponse.Raw,
    Sayari.EntitySummaryResponse
> = core.serialization.object({}).extend(core.serialization.lazyObject(() => serializers.EntityDetails));

export declare namespace EntitySummaryResponse {
    export interface Raw extends serializers.EntityDetails.Raw {}
}
