/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { RecordDetails } from "./RecordDetails";
import { ReferencedByDataType } from "./ReferencedByDataType";

export const ReferencedByData: core.serialization.ObjectSchema<
    serializers.ReferencedByData.Raw,
    SayariAnalyticsApi.ReferencedByData
> = core.serialization.object({
    record: RecordDetails,
    type: ReferencedByDataType,
});

export declare namespace ReferencedByData {
    interface Raw {
        record: RecordDetails.Raw;
        type: ReferencedByDataType.Raw;
    }
}