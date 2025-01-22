/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { FinanceType } from "./FinanceType";
import { Currency } from "./Currency";

export const FinancesProperties: core.serialization.ObjectSchema<
    serializers.FinancesProperties.Raw,
    Sayari.FinancesProperties
> = core.serialization.object({
    context: FinanceType.optional(),
    currency: Currency.optional(),
    date: core.serialization.string().optional(),
    extra: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    fromDate: core.serialization.property("from_date", core.serialization.string().optional()),
    toDate: core.serialization.property("to_date", core.serialization.string().optional()),
    type: core.serialization.string().optional(),
    value: core.serialization.number(),
});

export declare namespace FinancesProperties {
    export interface Raw {
        context?: FinanceType.Raw | null;
        currency?: Currency.Raw | null;
        date?: string | null;
        extra?: Record<string, unknown> | null;
        from_date?: string | null;
        to_date?: string | null;
        type?: string | null;
        value: number;
    }
}
