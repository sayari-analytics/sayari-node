/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

export interface HistoryInfo {
    user: string;
    environment: string;
    event: string;
    data: SayariAnalyticsApi.EventInfo;
    timestamp: string;
}
