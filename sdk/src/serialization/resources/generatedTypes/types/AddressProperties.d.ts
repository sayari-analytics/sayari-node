/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AddressProperties: core.serialization.ObjectSchema<serializers.AddressProperties.Raw, SayariAnalyticsApi.AddressProperties>;
export declare namespace AddressProperties {
    interface Raw {
        building?: string | null;
        category?: string | null;
        city?: string | null;
        city_district?: string | null;
        country?: string | null;
        country_region?: string | null;
        entrance?: string | null;
        house?: string | null;
        house_number?: string | null;
        island?: string | null;
        language?: serializers.Language.Raw | null;
        level?: string | null;
        metro_station?: string | null;
        near?: string | null;
        po_box?: string | null;
        postcode?: string | null;
        precision_code?: string | null;
        road?: string | null;
        staircase?: string | null;
        state?: string | null;
        state_district?: string | null;
        suburb?: string | null;
        translated?: string | null;
        transliterated?: string | null;
        type?: serializers.AddressType.Raw | null;
        unit?: string | null;
        value?: string | null;
        world_region?: string | null;
        x?: number | null;
        y?: number | null;
    }
}
