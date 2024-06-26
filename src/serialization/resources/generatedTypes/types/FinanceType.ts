/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const FinanceType: core.serialization.Schema<serializers.FinanceType.Raw, Sayari.FinanceType> =
    core.serialization.enum_([
        "share_percentage",
        "share_amount",
        "registered_capital",
        "paid_up_capital",
        "authorized_capital",
        "subscribed_capital",
    ]);

export declare namespace FinanceType {
    type Raw =
        | "share_percentage"
        | "share_amount"
        | "registered_capital"
        | "paid_up_capital"
        | "authorized_capital"
        | "subscribed_capital";
}
