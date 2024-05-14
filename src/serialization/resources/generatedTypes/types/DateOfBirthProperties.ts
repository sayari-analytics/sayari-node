/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const DateOfBirthProperties: core.serialization.ObjectSchema<
    serializers.DateOfBirthProperties.Raw,
    SayariAnalyticsApi.DateOfBirthProperties
> = core.serialization.object({
    date: core.serialization.string().optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    value: core.serialization.string(),
});

export declare namespace DateOfBirthProperties {
    interface Raw {
        date?: string | null;
        from_date?: string | null;
        to_date?: string | null;
        value: string;
    }
}
