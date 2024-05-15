/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * @example
 *     {
 *         data: {
 *             id: "YVMBRg",
 *             label: "Project Alpha",
 *             archived: false,
 *             created: "2024-03-15 20:31:06.08855+00",
 *             updated: "2024-03-15 20:31:06.08855+00",
 *             counts: {
 *                 entity: 0,
 *                 graph: 0,
 *                 record: 0,
 *                 search: 0
 *             }
 *         }
 *     }
 */
export interface CreateProjectResponse {
    data: SayariAnalyticsApi.Project;
}
