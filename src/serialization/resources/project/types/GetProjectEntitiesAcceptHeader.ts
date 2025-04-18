/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const GetProjectEntitiesAcceptHeader: core.serialization.Schema<
    serializers.GetProjectEntitiesAcceptHeader.Raw,
    Sayari.GetProjectEntitiesAcceptHeader
> = core.serialization.enum_(["application/json", "text/csv", "application/vnd.ms-excel"]);

export declare namespace GetProjectEntitiesAcceptHeader {
    export type Raw = "application/json" | "text/csv" | "application/vnd.ms-excel";
}
