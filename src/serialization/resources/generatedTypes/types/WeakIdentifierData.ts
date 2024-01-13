/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const WeakIdentifierData: core.serialization.ObjectSchema<
    serializers.WeakIdentifierData.Raw,
    SayariAnalyticsApi.WeakIdentifierData
> = core.serialization
    .object({
        properties: core.serialization.lazyObject(async () => (await import("../../..")).WeakIdentifierProperties),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace WeakIdentifierData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.WeakIdentifierProperties.Raw;
    }
}
