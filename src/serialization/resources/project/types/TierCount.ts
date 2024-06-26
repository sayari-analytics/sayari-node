/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { TierCountKeys } from "./TierCountKeys";

export const TierCount: core.serialization.Schema<serializers.TierCount.Raw, Sayari.TierCount> =
    core.serialization.record(TierCountKeys, core.serialization.number());

export declare namespace TierCount {
    type Raw = Record<TierCountKeys.Raw, number>;
}