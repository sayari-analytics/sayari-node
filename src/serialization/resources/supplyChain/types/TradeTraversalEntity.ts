/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const TradeTraversalEntity: core.serialization.ObjectSchema<
    serializers.TradeTraversalEntity.Raw,
    Sayari.TradeTraversalEntity
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.string(),
    label: core.serialization.string(),
    countries: core.serialization.list(core.serialization.string()),
    risk: core.serialization.list(core.serialization.string()),
});

export declare namespace TradeTraversalEntity {
    export interface Raw {
        id: string;
        type: string;
        label: string;
        countries: string[];
        risk: string[];
    }
}
