/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const StatusContext: core.serialization.Schema<serializers.StatusContext.Raw, Sayari.StatusContext> =
    core.serialization.enum_([
        "broker_license",
        "investment_advisor_license",
        "sole_proprietorship_status",
        "general_partnership_status",
        "limited_liability_partnership_status",
    ]);

export declare namespace StatusContext {
    type Raw =
        | "broker_license"
        | "investment_advisor_license"
        | "sole_proprietorship_status"
        | "general_partnership_status"
        | "limited_liability_partnership_status";
}
