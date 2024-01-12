/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const FinancialsData: core.serialization.ObjectSchema<
    serializers.FinancialsData.Raw,
    SayariAnalyticsApi.FinancialsData
> = core.serialization
    .object({
        properties: core.serialization.lazyObject(async () => (await import("../../..")).FinancialsProperties),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace FinancialsData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.FinancialsProperties.Raw;
    }
}
