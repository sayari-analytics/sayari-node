/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const MonetaryValueContext: core.serialization.Schema<
    serializers.MonetaryValueContext.Raw,
    SayariAnalyticsApi.MonetaryValueContext
> = core.serialization.enum_(["cost_insurance_and_freight", "free_on_board"]);

export declare namespace MonetaryValueContext {
    type Raw = "cost_insurance_and_freight" | "free_on_board";
}
