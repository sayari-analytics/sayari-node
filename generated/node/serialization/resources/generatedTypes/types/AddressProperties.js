/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as core from "../../../../core";
export const AddressProperties = core.serialization.object({
    building: core.serialization.string().optional(),
    category: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    cityDistrict: core.serialization.property("city_district", core.serialization.string().optional()),
    country: core.serialization.string().optional(),
    countryRegion: core.serialization.property("country_region", core.serialization.string().optional()),
    entrance: core.serialization.string().optional(),
    house: core.serialization.string().optional(),
    houseNumber: core.serialization.property("house_number", core.serialization.string().optional()),
    island: core.serialization.string().optional(),
    language: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).Language; })).optional(),
    level: core.serialization.string().optional(),
    metroStation: core.serialization.property("metro_station", core.serialization.string().optional()),
    near: core.serialization.string().optional(),
    poBox: core.serialization.property("po_box", core.serialization.string().optional()),
    postcode: core.serialization.string().optional(),
    precisionCode: core.serialization.property("precision_code", core.serialization.string().optional()),
    road: core.serialization.string().optional(),
    staircase: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    stateDistrict: core.serialization.property("state_district", core.serialization.string().optional()),
    suburb: core.serialization.string().optional(),
    translated: core.serialization.string().optional(),
    transliterated: core.serialization.string().optional(),
    type: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).AddressType; })).optional(),
    unit: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    worldRegion: core.serialization.property("world_region", core.serialization.string().optional()),
    x: core.serialization.number().optional(),
    y: core.serialization.number().optional(),
});
