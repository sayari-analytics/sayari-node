/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * @example
 *     {
 *         prev: "MjAyMy0xMC0yNSAxNDo0NDowNi4zMjIxMTcrMDB8VjAzTU5Z",
 *         next: "MjAyMy0wOS0xNSAxODoyNDozOC45ODEwMjMrMDB8OFlWQjZZ",
 *         limit: 8,
 *         data: [{
 *                 id: "V03MNY",
 *                 label: "Project 1",
 *                 archived: false,
 *                 created: "2023-10-25 14:44:06.322117+00",
 *                 updated: "2023-10-25 14:44:06.322117+00",
 *                 counts: {},
 *                 members: [{
 *                         type: SayariAnalyticsApi.RoleMemberType.User,
 *                         id: "auth0|7a8f3e2b91d476c5b2e04a87",
 *                         role: SayariAnalyticsApi.Role.Admin,
 *                         created: "2023-10-25T14:44:06.322117+00:00",
 *                         updated: "2023-10-25T14:44:06.322117+00:00"
 *                     }]
 *             }, {
 *                 id: "eYDDmY",
 *                 label: "Project 2",
 *                 archived: false,
 *                 created: "2023-10-24 20:41:21.235451+00",
 *                 updated: "2023-10-24 20:41:21.235451+00",
 *                 counts: {
 *                     graph: 1,
 *                     entity: 2530
 *                 },
 *                 members: [{
 *                         type: SayariAnalyticsApi.RoleMemberType.User,
 *                         id: "auth0|f0bc63a9e72d18ef4c5702d6",
 *                         role: SayariAnalyticsApi.Role.Admin,
 *                         created: "2023-10-24T20:41:21.235451+00:00",
 *                         updated: "2023-10-24T20:41:21.235451+00:00"
 *                     }, {
 *                         type: SayariAnalyticsApi.RoleMemberType.Group,
 *                         id: "org_VdFgkL2qNpweRZAs",
 *                         role: SayariAnalyticsApi.Role.Viewer,
 *                         created: "2023-11-04T18:40:30.942863+00:00",
 *                         updated: "2023-11-04T18:40:30.942863+00:00"
 *                     }]
 *             }]
 *     }
 *
 * @example
 *     {
 *         limit: 5,
 *         data: [{
 *                 id: "e0Kj4G",
 *                 label: "Old Project 3",
 *                 archived: true,
 *                 created: "2023-06-18 04:28:05.136302+00",
 *                 updated: "2023-06-20 18:44:03.624841+00",
 *                 counts: {
 *                     entity: 10
 *                 },
 *                 members: [{
 *                         type: SayariAnalyticsApi.RoleMemberType.User,
 *                         id: "auth0|6f57ab9facce276d4923e625",
 *                         role: SayariAnalyticsApi.Role.Viewer,
 *                         created: "2023-06-20T18:43:43.925805+00:00",
 *                         updated: "2023-06-20T18:43:43.925805+00:00"
 *                     }, {
 *                         type: SayariAnalyticsApi.RoleMemberType.User,
 *                         id: "google-oauth2|428967532187509612834",
 *                         role: SayariAnalyticsApi.Role.Admin,
 *                         created: "2023-06-18T04:28:05.136302+00:00",
 *                         updated: "2023-06-18T04:28:05.136302+00:00"
 *                     }]
 *             }]
 *     }
 */
export interface GetProjectsResponse {
    next?: string;
    prev?: string;
    first?: boolean;
    last?: boolean;
    limit: number;
    data: SayariAnalyticsApi.ProjectWithMembers[];
}
