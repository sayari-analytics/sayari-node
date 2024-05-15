/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

export interface ResourceNotificationData {
    /** The ID of the saved resource */
    savedResourceId: string;
    /** The ID of the project the entity is saved to */
    projectId: string;
    /** The ID of the entity */
    entityId: string;
    /** The type of notification, currently limited to 'risk' */
    type: SayariAnalyticsApi.NotificationType;
    /** The field that the notification is for */
    field: SayariAnalyticsApi.Risk;
    /** The previous value of the field */
    value: SayariAnalyticsApi.RiskValue;
    /** The date the notification was created */
    date: string;
}