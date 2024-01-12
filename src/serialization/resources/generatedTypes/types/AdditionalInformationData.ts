/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const AdditionalInformationData: core.serialization.ObjectSchema<
    serializers.AdditionalInformationData.Raw,
    SayariAnalyticsApi.AdditionalInformationData
> = core.serialization
    .object({
        properties: core.serialization.lazyObject(
            async () => (await import("../../..")).AdditionalInformationProperties
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace AdditionalInformationData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.AdditionalInformationProperties.Raw;
    }
}
