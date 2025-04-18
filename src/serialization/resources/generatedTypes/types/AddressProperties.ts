/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Language } from "./Language";

export const AddressProperties: core.serialization.ObjectSchema<
    serializers.AddressProperties.Raw,
    Sayari.AddressProperties
> = core.serialization.object({
    building: core.serialization.string().optional(),
    category: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    cityDistrict: core.serialization.property("city_district", core.serialization.string().optional()),
    country: core.serialization.string().optional(),
    countryRegion: core.serialization.property("country_region", core.serialization.string().optional()),
    date: core.serialization.string().optional(),
    entrance: core.serialization.string().optional(),
    extra: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    house: core.serialization.string().optional(),
    houseNumber: core.serialization.property("house_number", core.serialization.string().optional()),
    island: core.serialization.string().optional(),
    language: Language.optional(),
    level: core.serialization.string().optional(),
    metroStation: core.serialization.property("metro_station", core.serialization.string().optional()),
    near: core.serialization.string().optional(),
    normalized: core.serialization.string().optional(),
    poBox: core.serialization.property("po_box", core.serialization.string().optional()),
    postcode: core.serialization.string().optional(),
    precisionCode: core.serialization.property("precision_code", core.serialization.string().optional()),
    road: core.serialization.string().optional(),
    staircase: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    stateDistrict: core.serialization.property("state_district", core.serialization.string().optional()),
    suburb: core.serialization.string().optional(),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    translated: core.serialization.string().optional(),
    transliterated: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    unit: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    worldRegion: core.serialization.property("world_region", core.serialization.string().optional()),
    x: core.serialization.number().optional(),
    y: core.serialization.number().optional(),
});

export declare namespace AddressProperties {
    export interface Raw {
        building?: string | null;
        category?: string | null;
        city?: string | null;
        city_district?: string | null;
        country?: string | null;
        country_region?: string | null;
        date?: string | null;
        entrance?: string | null;
        extra?: Record<string, unknown> | null;
        from_date?: string | null;
        house?: string | null;
        house_number?: string | null;
        island?: string | null;
        language?: Language.Raw | null;
        level?: string | null;
        metro_station?: string | null;
        near?: string | null;
        normalized?: string | null;
        po_box?: string | null;
        postcode?: string | null;
        precision_code?: string | null;
        road?: string | null;
        staircase?: string | null;
        state?: string | null;
        state_district?: string | null;
        suburb?: string | null;
        to_date?: string | null;
        translated?: string | null;
        transliterated?: string | null;
        type?: string | null;
        unit?: string | null;
        value?: string | null;
        world_region?: string | null;
        x?: number | null;
        y?: number | null;
    }
}
