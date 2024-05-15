/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { TradeTraversalProduct } from "./TradeTraversalProduct";

export const TradeTraversalPathSegment: core.serialization.ObjectSchema<
    serializers.TradeTraversalPathSegment.Raw,
    SayariAnalyticsApi.TradeTraversalPathSegment
> = core.serialization.object({
    src: core.serialization.string(),
    dst: core.serialization.string(),
    hsCodes: core.serialization.property("hs_codes", core.serialization.list(core.serialization.string()).optional()),
    products: core.serialization.list(TradeTraversalProduct).optional(),
});

export declare namespace TradeTraversalPathSegment {
    interface Raw {
        src: string;
        dst: string;
        hs_codes?: string[] | null;
        products?: TradeTraversalProduct.Raw[] | null;
    }
}