/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Sayari from "../../../../../api/index";
import * as core from "../../../../../core";
import { TradeFilterList } from "../../types/TradeFilterList";

export const SearchBuyers: core.serialization.Schema<
    serializers.SearchBuyers.Raw,
    Omit<Sayari.SearchBuyers, "limit" | "offset">
> = core.serialization.object({
    q: core.serialization.string().optional(),
    filter: TradeFilterList.optional(),
    facets: core.serialization.boolean().optional(),
});

export declare namespace SearchBuyers {
    export interface Raw {
        q?: string | null;
        filter?: TradeFilterList.Raw | null;
        facets?: boolean | null;
    }
}
