/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const FinancesProperties: core.serialization.ObjectSchema<
    serializers.FinancesProperties.Raw,
    SayariAnalyticsApi.FinancesProperties
> = core.serialization.object({
    context: core.serialization.lazy(async () => (await import("../../..")).FinanceType).optional(),
    currency: core.serialization.lazy(async () => (await import("../../..")).Currency).optional(),
    type: core.serialization.string().optional(),
    value: core.serialization.number(),
});

export declare namespace FinancesProperties {
    interface Raw {
        context?: serializers.FinanceType.Raw | null;
        currency?: serializers.Currency.Raw | null;
        type?: string | null;
        value: number;
    }
}
