/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { HsCodeWithDescription } from "./HsCodeWithDescription";

export const TradeTraversalProduct: core.serialization.ObjectSchema<
    serializers.TradeTraversalProduct.Raw,
    Sayari.TradeTraversalProduct
> = core.serialization.object({
    hsCode: core.serialization.property("hs_code", HsCodeWithDescription),
    minDate: core.serialization.property("min_date", core.serialization.string()),
    maxDate: core.serialization.property("max_date", core.serialization.string()),
    arrivalCountries: core.serialization.property(
        "arrival_countries",
        core.serialization.list(core.serialization.string())
    ),
    departureCountries: core.serialization.property(
        "departure_countries",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace TradeTraversalProduct {
    interface Raw {
        hs_code: HsCodeWithDescription.Raw;
        min_date: string;
        max_date: string;
        arrival_countries: string[];
        departure_countries: string[];
    }
}
