/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as SayariAnalyticsApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const SearchBuyers: core.serialization.Schema<serializers.SearchBuyers.Raw, Omit<SayariAnalyticsApi.SearchBuyers, "limit" | "offset">>;
export declare namespace SearchBuyers {
    interface Raw {
        q: string;
        fields?: serializers.ShipmentField.Raw[] | null;
        filter?: serializers.TradeFilterList.Raw | null;
        facets?: boolean | null;
        advanced?: boolean | null;
    }
}
