/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Country } from "../../generatedTypes/types/Country";
import { AddressProperties } from "../../generatedTypes/types/AddressProperties";

export const ShipmentMetadata: core.serialization.ObjectSchema<
    serializers.ShipmentMetadata.Raw,
    Sayari.ShipmentMetadata
> = core.serialization.object({
    arrivalCountry: core.serialization.property("arrival_country", core.serialization.list(Country)),
    jurisdiction: core.serialization.list(Country),
    referenceId: core.serialization.property("reference_id", core.serialization.string()),
    entityId: core.serialization.property("entity_id", core.serialization.string()),
    departureAddress: core.serialization.property("departure_address", AddressProperties.optional()),
    type: core.serialization.string(),
    sources: core.serialization.list(core.serialization.string()),
    departureCountry: core.serialization.property("departure_country", core.serialization.list(Country)),
});

export declare namespace ShipmentMetadata {
    export interface Raw {
        arrival_country: Country.Raw[];
        jurisdiction: Country.Raw[];
        reference_id: string;
        entity_id: string;
        departure_address?: AddressProperties.Raw | null;
        type: string;
        sources: string[];
        departure_country: Country.Raw[];
    }
}
