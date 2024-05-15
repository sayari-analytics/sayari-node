/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const DocCount: core.serialization.ObjectSchema<serializers.DocCount.Raw, SayariAnalyticsApi.DocCount> =
    core.serialization.object({
        docCount: core.serialization.property("doc_count", core.serialization.number()),
    });

export declare namespace DocCount {
    interface Raw {
        doc_count: number;
    }
}