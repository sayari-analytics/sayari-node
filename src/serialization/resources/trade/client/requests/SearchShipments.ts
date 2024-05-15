/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SayariAnalyticsApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { TradeFilterList } from "../../types/TradeFilterList";

export const SearchShipments: core.serialization.Schema<
    serializers.SearchShipments.Raw,
    Omit<SayariAnalyticsApi.SearchShipments, "limit" | "offset">
> = core.serialization.object({
    q: core.serialization.string(),
    filter: TradeFilterList.optional(),
    facets: core.serialization.boolean().optional(),
});

export declare namespace SearchShipments {
    interface Raw {
        q: string;
        filter?: TradeFilterList.Raw | null;
        facets?: boolean | null;
    }
}
