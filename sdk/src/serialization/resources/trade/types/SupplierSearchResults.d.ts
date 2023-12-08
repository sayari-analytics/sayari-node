/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const SupplierSearchResults: core.serialization.ObjectSchema<serializers.SupplierSearchResults.Raw, SayariAnalyticsApi.SupplierSearchResults>;
export declare namespace SupplierSearchResults {
    interface Raw extends serializers.PaginatedResponse.Raw {
        offset: number;
        next: boolean;
        data: serializers.SupplierOrBuyerHits.Raw;
    }
}
