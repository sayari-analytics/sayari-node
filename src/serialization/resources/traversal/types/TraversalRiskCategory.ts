/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { RiskCategory } from "../../generatedTypes/types/RiskCategory";

export const TraversalRiskCategory: core.serialization.Schema<
    serializers.TraversalRiskCategory.Raw,
    Sayari.TraversalRiskCategory
> = core.serialization.undiscriminatedUnion([core.serialization.list(RiskCategory), core.serialization.string()]);

export declare namespace TraversalRiskCategory {
    export type Raw = RiskCategory.Raw[] | string;
}
