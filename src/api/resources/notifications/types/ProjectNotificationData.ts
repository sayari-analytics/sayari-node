/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface ProjectNotificationData {
    /** The ID of the entity */
    id: string;
    /** The ID of the saved resource */
    resourceId: string;
    /** The ID of the entity */
    entityId: string;
    notifications: Sayari.Notification[];
}
