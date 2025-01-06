/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const MonetaryValueContext: core.serialization.Schema<
    serializers.MonetaryValueContext.Raw,
    Sayari.MonetaryValueContext
> = core.serialization.enum_(["assessed_value", "cost_insurance_and_freight", "free_on_board"]);

export declare namespace MonetaryValueContext {
    export type Raw = "assessed_value" | "cost_insurance_and_freight" | "free_on_board";
}
