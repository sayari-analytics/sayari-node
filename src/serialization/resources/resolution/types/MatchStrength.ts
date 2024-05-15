/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const MatchStrength: core.serialization.ObjectSchema<
    serializers.MatchStrength.Raw,
    SayariAnalyticsApi.MatchStrength
> = core.serialization.object({
    value: core.serialization.string(),
});

export declare namespace MatchStrength {
    interface Raw {
        value: string;
    }
}
