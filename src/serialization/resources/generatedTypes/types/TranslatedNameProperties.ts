/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { TranslationContext } from "./TranslationContext";

export const TranslatedNameProperties: core.serialization.ObjectSchema<
    serializers.TranslatedNameProperties.Raw,
    Sayari.TranslatedNameProperties
> = core.serialization.object({
    context: TranslationContext.optional(),
    date: core.serialization.string().optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    original: core.serialization.string().optional(),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    value: core.serialization.string(),
});

export declare namespace TranslatedNameProperties {
    export interface Raw {
        context?: TranslationContext.Raw | null;
        date?: string | null;
        from_date?: string | null;
        original?: string | null;
        to_date?: string | null;
        value: string;
    }
}
