/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     {
 *         label: "Project Alpha"
 *     }
 *
 * @example
 *     {
 *         label: "Project Alpha",
 *         share: {
 *             org: Sayari.Role.Viewer
 *         }
 *     }
 */
export interface CreateProjectRequest {
    label: string;
    /** Specifies access levels available to users in a project within an organization. For comprehensive access, the admin role is recommended. */
    share?: Sayari.ProjectShareOnCreate;
}
