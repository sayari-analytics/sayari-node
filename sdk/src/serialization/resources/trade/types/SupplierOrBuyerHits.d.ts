/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const SupplierOrBuyerHits: core.serialization.ObjectSchema<serializers.SupplierOrBuyerHits.Raw, SayariAnalyticsApi.SupplierOrBuyerHits>;
export declare namespace SupplierOrBuyerHits {
    interface Raw {
        hits: serializers.Supplier.Raw[];
        aggregations: serializers.Aggregations.Raw;
    }
}