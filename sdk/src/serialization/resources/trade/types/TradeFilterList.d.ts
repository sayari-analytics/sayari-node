/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const TradeFilterList: core.serialization.ObjectSchema<serializers.TradeFilterList.Raw, SayariAnalyticsApi.TradeFilterList>;
export declare namespace TradeFilterList {
    interface Raw {
        buyer_id?: string[] | null;
        supplier_id?: string[] | null;
        buyer_name?: string[] | null;
        supplier_name?: string[] | null;
        buyer_risk?: string[] | null;
        supplier_risk?: string[] | null;
        buyer_country?: serializers.Country.Raw[] | null;
        supplier_country?: serializers.Country.Raw[] | null;
        departure_country?: serializers.Country.Raw[] | null;
        departure_state?: string[] | null;
        departure_city?: string[] | null;
        arrival_country?: serializers.Country.Raw[] | null;
        arrival_state?: string[] | null;
        arrival_city?: string[] | null;
        hs_code?: string[] | null;
        hs_description?: string[] | null;
        supplier_purpose?: string[] | null;
        buyer_purpose?: string[] | null;
        arrival_date?: string[] | null;
        weight?: string[] | null;
        sources?: string[] | null;
    }
}
