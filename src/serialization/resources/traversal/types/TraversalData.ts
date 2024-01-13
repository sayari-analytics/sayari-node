/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const TraversalData: core.serialization.ObjectSchema<
    serializers.TraversalData.Raw,
    SayariAnalyticsApi.TraversalData
> = core.serialization.object({
    source: core.serialization.string(),
    target: core.serialization.lazyObject(async () => (await import("../../..")).EntityDetails),
    path: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).TraversalPath)),
});

export declare namespace TraversalData {
    interface Raw {
        source: string;
        target: serializers.EntityDetails.Raw;
        path: serializers.TraversalPath.Raw[];
    }
}
