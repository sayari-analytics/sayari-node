/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 20,
 *         next: false,
 *         size: {
 *             count: 3,
 *             qualifier: Sayari.CountQualifier.Eq
 *         },
 *         data: [{
 *                 id: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 entityId: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 resourceId: "0eZQ43",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborXinjiangOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }],
 *                 customFields: {
 *                     "properties": {
 *                         "custom_name": "Victoria Beckham"
 *                     }
 *                 },
 *                 riskNotifications: {
 *                     added: ["forced_labor_xinjiang_origin_subtier"],
 *                     removed: [],
 *                     date: "2024-02-06T00:00:00.000Z"
 *                 }
 *             }, {
 *                 id: "wxwqZshCF4trlrmOa2eu9w",
 *                 entityId: "wxwqZshCF4trlrmOa2eu9w",
 *                 resourceId: "03ePyj",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["3"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }],
 *                 riskNotifications: {
 *                     added: [],
 *                     removed: ["forced_labor_sheffield_hallam_university_reports_origin_subtier"],
 *                     date: "2024-02-15T00:00:00.000Z"
 *                 }
 *             }, {
 *                 id: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 entityId: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 resourceId: "0XEQaX",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.OwnerOfRegulatoryActionEntity,
 *                         values: ["1"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }, {
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginDirect,
 *                         values: ["1"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }, {
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }],
 *                 customFields: {
 *                     "properties": {
 *                         "custom_identifier": "abc123"
 *                     }
 *                 },
 *                 riskNotifications: {
 *                     added: ["forced_labor_sheffield_hallam_university_reports_origin_subtier"],
 *                     removed: ["owner_of_regulatory_action_entity", "forced_labor_sheffield_hallam_university_reports_origin_direct"],
 *                     date: "2024-02-15T00:00:00.000Z"
 *                 }
 *             }]
 *     }
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 20,
 *         next: false,
 *         size: {
 *             count: 3,
 *             qualifier: Sayari.CountQualifier.Eq
 *         },
 *         data: [{
 *                 id: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 entityId: "dlOL1cZzEkIEZcRUcrBZCQ",
 *                 resourceId: "0eZQ43",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborXinjiangOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }],
 *                 customFields: {
 *                     "properties": {
 *                         "custom_name": "Victoria Beckham"
 *                     }
 *                 },
 *                 riskNotifications: {
 *                     added: ["forced_labor_xinjiang_origin_subtier"],
 *                     removed: [],
 *                     date: "2024-02-06T00:00:00.000Z"
 *                 }
 *             }, {
 *                 id: "wxwqZshCF4trlrmOa2eu9w",
 *                 entityId: "wxwqZshCF4trlrmOa2eu9w",
 *                 resourceId: "03ePyj",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["3"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }],
 *                 riskNotifications: {
 *                     added: [],
 *                     removed: ["forced_labor_sheffield_hallam_university_reports_origin_subtier"],
 *                     date: "2024-02-15T00:00:00.000Z"
 *                 }
 *             }, {
 *                 id: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 entityId: "dX9cfM3FPefIp8VAuBKgIQ",
 *                 resourceId: "0XEQaX",
 *                 notifications: [{
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginDirect,
 *                         values: ["1"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }, {
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier,
 *                         values: ["false"],
 *                         date: "2024-02-15T00:00:00.000Z"
 *                     }, {
 *                         type: Sayari.NotificationType.Risk,
 *                         field: Sayari.Risk.OwnerOfRegulatoryActionEntity,
 *                         values: ["1"],
 *                         date: "2024-02-06T00:00:00.000Z"
 *                     }],
 *                 customFields: {
 *                     "properties": {
 *                         "custom_identifier": "abc123"
 *                     }
 *                 },
 *                 riskNotifications: {
 *                     added: ["forced_labor_sheffield_hallam_university_reports_origin_subtier"],
 *                     removed: ["owner_of_regulatory_action_entity", "forced_labor_sheffield_hallam_university_reports_origin_direct"],
 *                     date: "2024-02-15T00:00:00.000Z"
 *                 }
 *             }]
 *     }
 */
export interface ProjectNotificationsResponse {
    offset: number;
    limit: number;
    next: boolean;
    data: Sayari.ProjectNotificationData[];
    size: Sayari.QualifiedCount;
}
