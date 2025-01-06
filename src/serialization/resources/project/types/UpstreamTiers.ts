/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const UpstreamTiers: core.serialization.Schema<serializers.UpstreamTiers.Raw, Sayari.UpstreamTiers> =
    core.serialization.enum_(["tier1", "tier2", "tier3", "tier4"]);

export declare namespace UpstreamTiers {
    export type Raw = "tier1" | "tier2" | "tier3" | "tier4";
}
