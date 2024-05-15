/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { NotificationType } from "./NotificationType";
import { Risk } from "../../generatedTypes/types/Risk";
import { RiskValue } from "../../sharedTypes/types/RiskValue";
import { NotificationAdditionalInformation } from "./NotificationAdditionalInformation";

export const Notification: core.serialization.ObjectSchema<
    serializers.Notification.Raw,
    SayariAnalyticsApi.Notification
> = core.serialization.object({
    type: NotificationType,
    field: Risk,
    values: core.serialization.list(RiskValue),
    date: core.serialization.string(),
    additionalInformation: core.serialization.property(
        "additional_information",
        NotificationAdditionalInformation.optional()
    ),
});

export declare namespace Notification {
    interface Raw {
        type: NotificationType.Raw;
        field: Risk.Raw;
        values: RiskValue.Raw[];
        date: string;
        additional_information?: NotificationAdditionalInformation.Raw | null;
    }
}