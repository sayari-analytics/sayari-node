/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * An attribute used for many different relationship types that allows for the inclusion of a title or designation (e.g., member_of_the_board_of, Position: "Secretary of the Board" or shareholder_of, Position: "Minority shareholder")
 */
export interface PositionInfo extends SayariAnalyticsApi.PaginatedResponse {
    data: SayariAnalyticsApi.PositionData[];
    next?: unknown;
    offset?: number;
}
