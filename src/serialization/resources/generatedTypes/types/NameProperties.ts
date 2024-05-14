/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { Language } from "./Language";

export const NameProperties: core.serialization.ObjectSchema<
    serializers.NameProperties.Raw,
    SayariAnalyticsApi.NameProperties
> = core.serialization.object({
    context: core.serialization.string().optional(),
    date: core.serialization.string().optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    language: Language.optional(),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    translated: core.serialization.string().optional(),
    transliterated: core.serialization.string().optional(),
    value: core.serialization.string(),
});

export declare namespace NameProperties {
    interface Raw {
        context?: string | null;
        date?: string | null;
        from_date?: string | null;
        language?: Language.Raw | null;
        to_date?: string | null;
        translated?: string | null;
        transliterated?: string | null;
        value: string;
    }
}
