/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { HistoryInfo } from "./HistoryInfo";

export const HistoryResponse: core.serialization.ObjectSchema<
    serializers.HistoryResponse.Raw,
    SayariAnalyticsApi.HistoryResponse
> = core.serialization.object({
    size: core.serialization.number(),
    nextToken: core.serialization.property("next_token", core.serialization.string()),
    events: core.serialization.list(HistoryInfo),
});

export declare namespace HistoryResponse {
    interface Raw {
        size: number;
        next_token: string;
        events: HistoryInfo.Raw[];
    }
}