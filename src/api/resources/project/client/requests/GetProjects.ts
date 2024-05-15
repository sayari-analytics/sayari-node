/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         archived: false,
 *         limit: 8
 *     }
 *
 * @example
 *     {
 *         archived: true,
 *         limit: 5
 *     }
 */
export interface GetProjects {
    /**
     * The pagination token for the next page of projects.
     */
    next?: string;
    /**
     * The pagination token for the previous page of projects.
     */
    prev?: string;
    /**
     * Limit total values returned for projects. Defaults to 100. Max 100.
     */
    limit?: number;
    /**
     * Toggle between projects that have been archived (true) or not (false). Defaults to false.
     */
    archived?: boolean;
}