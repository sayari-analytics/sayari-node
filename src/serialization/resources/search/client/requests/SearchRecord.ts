/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Sayari from "../../../../../api/index";
import * as core from "../../../../../core";
import { SearchField } from "../../../sharedTypes/types/SearchField";
import { FilterList } from "../../types/FilterList";

export const SearchRecord: core.serialization.Schema<
    serializers.SearchRecord.Raw,
    Omit<Sayari.SearchRecord, "limit" | "offset">
> = core.serialization.object({
    q: core.serialization.string(),
    fields: core.serialization.list(SearchField).optional(),
    filter: FilterList.optional(),
    facets: core.serialization.boolean().optional(),
    advanced: core.serialization.boolean().optional(),
});

export declare namespace SearchRecord {
    interface Raw {
        q: string;
        fields?: SearchField.Raw[] | null;
        filter?: FilterList.Raw | null;
        facets?: boolean | null;
        advanced?: boolean | null;
    }
}
