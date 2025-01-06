/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { TierCount } from "./TierCount";
import { TierCountKeys } from "./TierCountKeys";

export const TierCountAgg: core.serialization.Schema<serializers.TierCountAgg.Raw, Sayari.TierCountAgg> =
    core.serialization.record(core.serialization.string(), TierCount);

export declare namespace TierCountAgg {
    export type Raw = Record<string, TierCount.Raw>;
}
