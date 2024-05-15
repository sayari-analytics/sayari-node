/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { Notification } from "./Notification";

export const ProjectNotificationData: core.serialization.ObjectSchema<
    serializers.ProjectNotificationData.Raw,
    SayariAnalyticsApi.ProjectNotificationData
> = core.serialization.object({
    id: core.serialization.string(),
    resourceId: core.serialization.property("resource_id", core.serialization.string()),
    entityId: core.serialization.property("entity_id", core.serialization.string()),
    notifications: core.serialization.list(Notification),
});

export declare namespace ProjectNotificationData {
    interface Raw {
        id: string;
        resource_id: string;
        entity_id: string;
        notifications: Notification.Raw[];
    }
}