/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { AdditionalInformationProperties } from "../../generatedTypes/types/AdditionalInformationProperties";

export const NotificationAdditionalInformation: core.serialization.ObjectSchema<
    serializers.NotificationAdditionalInformation.Raw,
    SayariAnalyticsApi.NotificationAdditionalInformation
> = core.serialization.object({
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    properties: core.serialization.list(AdditionalInformationProperties),
});

export declare namespace NotificationAdditionalInformation {
    interface Raw {
        value?: Record<string, unknown> | null;
        properties: AdditionalInformationProperties.Raw[];
    }
}
