/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { Country } from "../../generatedTypes/types/Country";

export const Source: core.serialization.ObjectSchema<serializers.Source.Raw, Sayari.Source> = core.serialization.object(
    {
        id: core.serialization.string(),
        label: core.serialization.string(),
        description: core.serialization.string(),
        country: Country,
        region: core.serialization.string(),
        dateAdded: core.serialization.property("date_added", core.serialization.string()),
        sourceType: core.serialization.property("source_type", core.serialization.string()),
        recordType: core.serialization.property("record_type", core.serialization.string()),
        structure: core.serialization.string(),
        sourceUrl: core.serialization.property("source_url", core.serialization.string().optional()),
        pep: core.serialization.boolean(),
        watchlist: core.serialization.boolean(),
    }
);

export declare namespace Source {
    interface Raw {
        id: string;
        label: string;
        description: string;
        country: Country.Raw;
        region: string;
        date_added: string;
        source_type: string;
        record_type: string;
        structure: string;
        source_url?: string | null;
        pep: boolean;
        watchlist: boolean;
    }
}
