/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const NameData: core.serialization.ObjectSchema<serializers.NameData.Raw, SayariAnalyticsApi.NameData> =
    core.serialization
        .object({
            properties: core.serialization.lazyObject(async () => (await import("../../..")).NameProperties),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AttributeData));

export declare namespace NameData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.NameProperties.Raw;
    }
}
