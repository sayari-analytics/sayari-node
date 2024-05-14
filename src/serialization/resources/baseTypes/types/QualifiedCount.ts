/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { CountQualifier } from "./CountQualifier";

export const QualifiedCount: core.serialization.ObjectSchema<
    serializers.QualifiedCount.Raw,
    SayariAnalyticsApi.QualifiedCount
> = core.serialization.object({
    count: core.serialization.number(),
    qualifier: CountQualifier,
});

export declare namespace QualifiedCount {
    interface Raw {
        count: number;
        qualifier: CountQualifier.Raw;
    }
}
