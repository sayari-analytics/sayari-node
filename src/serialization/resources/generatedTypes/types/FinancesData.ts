/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const FinancesData: core.serialization.ObjectSchema<
    serializers.FinancesData.Raw,
    SayariAnalyticsApi.FinancesData
> = core.serialization
    .object({
        properties: core.serialization.lazyObject(async () => (await import("../../..")).FinancesProperties),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace FinancesData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.FinancesProperties.Raw;
    }
}
