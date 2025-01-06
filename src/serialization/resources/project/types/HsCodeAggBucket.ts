/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { IntKeyValue } from "./IntKeyValue";

export const HsCodeAggBucket: core.serialization.ObjectSchema<serializers.HsCodeAggBucket.Raw, Sayari.HsCodeAggBucket> =
    core.serialization.object({
        key: core.serialization.string(),
        docCount: core.serialization.property("doc_count", core.serialization.number()),
        hsCodeSums: core.serialization.property("hs_code_sums", IntKeyValue.optional()),
    });

export declare namespace HsCodeAggBucket {
    export interface Raw {
        key: string;
        doc_count: number;
        hs_code_sums?: IntKeyValue.Raw | null;
    }
}
