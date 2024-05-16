/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { HsCodeAggBucket } from "./HsCodeAggBucket";

export const HsCodeAggTerms: core.serialization.ObjectSchema<serializers.HsCodeAggTerms.Raw, Sayari.HsCodeAggTerms> =
    core.serialization.object({
        docCountErrorUpperBound: core.serialization.property(
            "doc_count_error_upper_bound",
            core.serialization.number()
        ),
        sumOtherDocCount: core.serialization.property("sum_other_doc_count", core.serialization.number()),
        buckets: core.serialization.list(HsCodeAggBucket),
    });

export declare namespace HsCodeAggTerms {
    interface Raw {
        doc_count_error_upper_bound: number;
        sum_other_doc_count: number;
        buckets: HsCodeAggBucket.Raw[];
    }
}
