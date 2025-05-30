/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const CompanyTypeProperties: core.serialization.ObjectSchema<
    serializers.CompanyTypeProperties.Raw,
    Sayari.CompanyTypeProperties
> = core.serialization.object({
    date: core.serialization.string().optional(),
    extra: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    value: core.serialization.string().optional(),
});

export declare namespace CompanyTypeProperties {
    export interface Raw {
        date?: string | null;
        extra?: Record<string, unknown> | null;
        from_date?: string | null;
        to_date?: string | null;
        value?: string | null;
    }
}
