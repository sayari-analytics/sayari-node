/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { Risk } from "../../generatedTypes/types/Risk";
import { Country } from "../../generatedTypes/types/Country";

export const TradeFilterList: core.serialization.ObjectSchema<
    serializers.TradeFilterList.Raw,
    SayariAnalyticsApi.TradeFilterList
> = core.serialization.object({
    buyerId: core.serialization.property("buyer_id", core.serialization.list(core.serialization.string()).optional()),
    supplierId: core.serialization.property(
        "supplier_id",
        core.serialization.list(core.serialization.string()).optional()
    ),
    buyerName: core.serialization.property(
        "buyer_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
    supplierName: core.serialization.property(
        "supplier_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
    buyerRisk: core.serialization.property("buyer_risk", core.serialization.list(Risk).optional()),
    supplierRisk: core.serialization.property("supplier_risk", core.serialization.list(Risk).optional()),
    buyerCountry: core.serialization.property("buyer_country", core.serialization.list(Country).optional()),
    supplierCountry: core.serialization.property("supplier_country", core.serialization.list(Country).optional()),
    departureCountry: core.serialization.property("departure_country", core.serialization.list(Country).optional()),
    departureState: core.serialization.property(
        "departure_state",
        core.serialization.list(core.serialization.string()).optional()
    ),
    departureCity: core.serialization.property(
        "departure_city",
        core.serialization.list(core.serialization.string()).optional()
    ),
    arrivalCountry: core.serialization.property("arrival_country", core.serialization.list(Country).optional()),
    arrivalState: core.serialization.property(
        "arrival_state",
        core.serialization.list(core.serialization.string()).optional()
    ),
    arrivalCity: core.serialization.property(
        "arrival_city",
        core.serialization.list(core.serialization.string()).optional()
    ),
    hsCode: core.serialization.property("hs_code", core.serialization.list(core.serialization.string()).optional()),
    hsDescription: core.serialization.property(
        "hs_description",
        core.serialization.list(core.serialization.string()).optional()
    ),
    supplierPurpose: core.serialization.property(
        "supplier_purpose",
        core.serialization.list(core.serialization.string()).optional()
    ),
    buyerPurpose: core.serialization.property(
        "buyer_purpose",
        core.serialization.list(core.serialization.string()).optional()
    ),
    arrivalDate: core.serialization.property(
        "arrival_date",
        core.serialization.list(core.serialization.string()).optional()
    ),
    departureDate: core.serialization.property(
        "departure_date",
        core.serialization.list(core.serialization.string()).optional()
    ),
    shipmentIdentifier: core.serialization.property(
        "shipment_identifier",
        core.serialization.list(core.serialization.string()).optional()
    ),
    weight: core.serialization.list(core.serialization.string()).optional(),
    sources: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace TradeFilterList {
    interface Raw {
        buyer_id?: string[] | null;
        supplier_id?: string[] | null;
        buyer_name?: string[] | null;
        supplier_name?: string[] | null;
        buyer_risk?: Risk.Raw[] | null;
        supplier_risk?: Risk.Raw[] | null;
        buyer_country?: Country.Raw[] | null;
        supplier_country?: Country.Raw[] | null;
        departure_country?: Country.Raw[] | null;
        departure_state?: string[] | null;
        departure_city?: string[] | null;
        arrival_country?: Country.Raw[] | null;
        arrival_state?: string[] | null;
        arrival_city?: string[] | null;
        hs_code?: string[] | null;
        hs_description?: string[] | null;
        supplier_purpose?: string[] | null;
        buyer_purpose?: string[] | null;
        arrival_date?: string[] | null;
        departure_date?: string[] | null;
        shipment_identifier?: string[] | null;
        weight?: string[] | null;
        sources?: string[] | null;
    }
}
