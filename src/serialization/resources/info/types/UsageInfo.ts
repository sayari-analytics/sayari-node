/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const UsageInfo: core.serialization.ObjectSchema<serializers.UsageInfo.Raw, Sayari.UsageInfo> =
    core.serialization.object({
        entity: core.serialization.number().optional(),
        record: core.serialization.number().optional(),
        resolve: core.serialization.number().optional(),
        search: core.serialization.number().optional(),
        searchEntities: core.serialization.property("search_entities", core.serialization.number().optional()),
        searchRecords: core.serialization.property("search_records", core.serialization.number().optional()),
        searchTrade: core.serialization.property("search_trade", core.serialization.number().optional()),
        tradeTraversal: core.serialization.property("trade_traversal", core.serialization.number().optional()),
        traversal: core.serialization.number().optional(),
    });

export declare namespace UsageInfo {
    export interface Raw {
        entity?: number | null;
        record?: number | null;
        resolve?: number | null;
        search?: number | null;
        search_entities?: number | null;
        search_records?: number | null;
        search_trade?: number | null;
        trade_traversal?: number | null;
        traversal?: number | null;
    }
}
