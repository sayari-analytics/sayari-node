/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { CountryContext } from "./CountryContext";
import { Country } from "./Country";

export const CountryProperties: core.serialization.ObjectSchema<
    serializers.CountryProperties.Raw,
    SayariAnalyticsApi.CountryProperties
> = core.serialization.object({
    context: CountryContext.optional(),
    date: core.serialization.string().optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    state: core.serialization.string().optional(),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    value: Country,
});

export declare namespace CountryProperties {
    interface Raw {
        context?: CountryContext.Raw | null;
        date?: string | null;
        from_date?: string | null;
        state?: string | null;
        to_date?: string | null;
        value: Country.Raw;
    }
}
