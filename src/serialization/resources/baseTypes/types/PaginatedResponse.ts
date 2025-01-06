/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { QualifiedCount } from "./QualifiedCount";

export const PaginatedResponse: core.serialization.ObjectSchema<
    serializers.PaginatedResponse.Raw,
    Sayari.PaginatedResponse
> = core.serialization.object({
    limit: core.serialization.number(),
    size: QualifiedCount,
});

export declare namespace PaginatedResponse {
    export interface Raw {
        limit: number;
        size: QualifiedCount.Raw;
    }
}
