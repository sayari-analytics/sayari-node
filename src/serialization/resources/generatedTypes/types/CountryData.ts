/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const CountryData: core.serialization.ObjectSchema<serializers.CountryData.Raw, SayariAnalyticsApi.CountryData> =
    core.serialization
        .object({
            properties: core.serialization.lazyObject(async () => (await import("../../..")).CountryProperties),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace CountryData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.CountryProperties.Raw;
    }
}
