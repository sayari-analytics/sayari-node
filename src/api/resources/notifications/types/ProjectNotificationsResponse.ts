/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 20,
 *         next: false,
 *         data: [{
 *                 id: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 entityId: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 resourceId: "0eZQ43",
 *                 notifications: [{
 *                         type: SayariAnalyticsApi.NotificationType.Risk,
 *                         field: SayariAnalyticsApi.Risk.ForcedLaborXinjiangOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }]
 *             }, {
 *                 id: "wxwqZshCF4trlrmOa2eu9w",
 *                 entityId: "wxwqZshCF4trlrmOa2eu9w",
 *                 resourceId: "03ePyj",
 *                 notifications: [{
 *                         type: SayariAnalyticsApi.NotificationType.Risk,
 *                         field: SayariAnalyticsApi.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["3"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }]
 *             }, {
 *                 id: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 entityId: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 resourceId: "0XEQaX",
 *                 notifications: [{
 *                         type: SayariAnalyticsApi.NotificationType.Risk,
 *                         field: SayariAnalyticsApi.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginDirect,
 *                         values: ["1"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }, {
 *                         type: SayariAnalyticsApi.NotificationType.Risk,
 *                         field: SayariAnalyticsApi.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }, {
 *                         type: SayariAnalyticsApi.NotificationType.Risk,
 *                         field: SayariAnalyticsApi.Risk.OwnerOfRegulatoryActionEntity,
 *                         values: ["1"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }]
 *             }]
 *     }
 */
export interface ProjectNotificationsResponse {
    offset: number;
    limit: number;
    next: boolean;
    data: SayariAnalyticsApi.ProjectNotificationData[];
}
