/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const MonetaryValueContext: core.serialization.Schema<
    serializers.MonetaryValueContext.Raw,
    Sayari.MonetaryValueContext
> = core.serialization.enum_(["cost_insurance_and_freight", "free_on_board", "assessed_value"]);

export declare namespace MonetaryValueContext {
    type Raw = "cost_insurance_and_freight" | "free_on_board" | "assessed_value";
}
